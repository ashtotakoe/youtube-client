/* eslint-disable max-nested-callbacks */
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, combineLatest, map, of, switchMap, withLatestFrom } from 'rxjs'

import { ChatTypes } from '../enums/chat-types.enum'
import type { Group } from '../models/group.model'
import { DialogStateService } from '../services/dialog-state.service'
import { connectionsGroupsApiActions } from './actions/connections-groups-api.actions'
import { connectionsUsersApiActions } from './actions/connections-users-api.actions'
import { conversationPageActions } from './actions/conversation-page.actions'
import { createGroupFormActions } from './actions/create-group-form.actions'
import { groupsListActions } from './actions/group-list.actions'
import { groupPageActions } from './actions/group-page.actions'
import { usersListActions } from './actions/users-list.actions'
import { HomeFacade } from './services/home.facade'
import { ConnectionsHttpService } from 'src/app/core/api/services/connections-http.service'
import { CountdownNames } from 'src/app/core/enums/countdown-names.enum'
import { ErrorMessages } from 'src/app/core/enums/error-messages.enum'
import { CountdownService } from 'src/app/core/services/countdown.service'
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service'
import { ProfileFacade } from 'src/app/profile/profile-store/services/profile.facade'

@Injectable()
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private connectionsHttpService: ConnectionsHttpService,
    private snackbarService: MatSnackBarService,
    private homeFacade: HomeFacade,
    private profileFacade: ProfileFacade,
    private countdownService: CountdownService,
    private dialogStateService: DialogStateService,
    private router: Router,
  ) {}

  public loadGroupsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupsListActions.loadGroups),
      withLatestFrom(this.homeFacade.groups$, this.profileFacade.profileData$),
      switchMap(([{ isCashed }, groups, profileData]) => {
        if (isCashed && groups.length) {
          return of(
            connectionsGroupsApiActions.loadGroupsSuccess({
              groups: groups.map(group => ({
                ...group,
                isCreatedByMe: group.createdBy === profileData?.uid,
              })),
            }),
          )
        }

        if (!isCashed) {
          this.countdownService.getCountdown(CountdownNames.RefreshGroupList)?.startCountdown()
        }

        return this.connectionsHttpService.loadGroups().pipe(
          // eslint-disable-next-line @typescript-eslint/naming-convention
          map(({ Items }) => [
            ...Items.map(group => ({
              id: group.id.S,
              name: group.name.S,
              createdAt: group.createdAt.S,
              createdBy: group.createdBy.S,
              isCreatedByMe: group.createdBy.S === profileData?.uid,
            })),
          ]),

          map((groupsFromApi: Group[]) => {
            return connectionsGroupsApiActions.loadGroupsSuccess({ groups: groupsFromApi })
          }),

          catchError(({ message }: Error) => {
            this.snackbarService.open(message)

            return of(connectionsGroupsApiActions.loadGroupsFailure({ errorMessage: message }))
          }),
        )
      }),
    ),
  )

  public createNewGroupEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createGroupFormActions.createNewGroup),
      switchMap(({ newGroupName }) =>
        this.connectionsHttpService.createNewGroup(newGroupName).pipe(
          withLatestFrom(this.profileFacade.profileData$),
          // eslint-disable-next-line @typescript-eslint/naming-convention
          map(([{ groupID }, profileData]) => {
            if (!profileData) {
              this.snackbarService.open(ErrorMessages.ProfileWasNotFound)

              return connectionsGroupsApiActions.createGroupFailure({
                errorMessage: ErrorMessages.ProfileWasNotFound,
              })
            }

            this.dialogStateService.closeDialog()
            this.snackbarService.open('Group was created')

            return connectionsGroupsApiActions.createGroupSuccess({
              group: {
                id: groupID,
                name: newGroupName,
                createdAt: new Date().toISOString(),
                createdBy: profileData.uid,
                isCreatedByMe: true,
              },
            })
          }),

          catchError(({ message }: Error) => {
            this.snackbarService.open(message)

            return of(connectionsGroupsApiActions.createGroupFailure({ errorMessage: message }))
          }),
        ),
      ),
    ),
  )

  public deleteGroupEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupsListActions.deleteGroup),
      switchMap(({ groupId }) =>
        this.connectionsHttpService.deleteChat({ chatId: groupId, chatType: ChatTypes.Group }).pipe(
          map(response => {
            if (response.ok) {
              this.snackbarService.open('Group was deleted')

              this.router.navigate(['/']).catch(() => null)

              return connectionsGroupsApiActions.deleteGroupSuccess({ groupId })
            }

            return connectionsGroupsApiActions.deleteGroupFailure({ errorMessage: ErrorMessages.SomethingWentWrong })
          }),
          catchError(({ message }: Error) => {
            this.snackbarService.open(message)

            return of(connectionsGroupsApiActions.deleteGroupFailure({ errorMessage: message }))
          }),
        ),
      ),
    ),
  )

  public deleteConversationEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(conversationPageActions.deleteConversation),
      switchMap(({ conversationId }) =>
        this.connectionsHttpService.deleteChat({ chatId: conversationId, chatType: ChatTypes.Conversation }).pipe(
          map(response => {
            if (response.ok) {
              this.snackbarService.open('Conversation was deleted')

              this.router.navigate(['/']).catch(() => null)

              return connectionsUsersApiActions.deleteConversationSuccess({ conversationId })
            }

            return connectionsUsersApiActions.deleteConversationFailure({
              errorMessage: ErrorMessages.SomethingWentWrong,
            })
          }),
          catchError(({ message }: Error) => {
            this.snackbarService.open(message)

            return of(connectionsUsersApiActions.deleteConversationFailure({ errorMessage: message }))
          }),
        ),
      ),
    ),
  )

  public loadUsersEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersListActions.loadUsers),
      withLatestFrom(this.homeFacade.users$, this.profileFacade.profileData$),
      switchMap(([{ isCashed }, users, profileData]) => {
        if (isCashed && users.length) {
          return of(connectionsUsersApiActions.loadUsersSuccess({ users }))
        }

        if (!isCashed) {
          this.countdownService.getCountdown(CountdownNames.RefreshUserList)?.startCountdown()
        }

        return combineLatest([
          this.connectionsHttpService.loadUsers(),
          this.connectionsHttpService.loadConversations(),
        ]).pipe(
          map(([usersResponse, conversationsResponse]) => {
            const usersFromApi = usersResponse.Items.map(user => {
              const conversationId =
                conversationsResponse.Items.find(conversation => conversation.companionID.S === user.uid.S)?.id.S ??
                undefined

              return {
                name: user.name.S,
                uid: user.uid.S,
                conversationId,
                hasConversationWithMe: conversationId !== undefined,
              }
            }).filter(user => user.uid !== profileData?.uid)

            this.snackbarService.open('Users loaded')

            return connectionsUsersApiActions.loadUsersSuccess({ users: usersFromApi })
          }),
          catchError(({ message }: Error) => {
            this.snackbarService.open(message)

            return of(connectionsUsersApiActions.loadUsersFailure({ errorMessage: message }))
          }),
        )
      }),
    ),
  )

  public createConversationEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersListActions.createConversation),
      switchMap(({ userId }) => {
        return this.connectionsHttpService.createConversation(userId).pipe(
          // eslint-disable-next-line @typescript-eslint/naming-convention
          map(({ conversationID }) => {
            this.snackbarService.open('Conversation created')

            return connectionsUsersApiActions.createConversationSuccess({
              conversationId: conversationID,
              partnerId: userId,
            })
          }),

          catchError(({ message }: Error) => {
            this.snackbarService.open(message)

            return of(connectionsUsersApiActions.createConversationFailure({ errorMessage: message }))
          }),
        )
      }),
    ),
  )

  public loadGroupChatEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupPageActions.loadGroupChat),
      withLatestFrom(this.homeFacade.groups$, this.profileFacade.profileData$, this.homeFacade.users$),
      switchMap(([{ groupId, isRefresh }, groups, profileData, users]) => {
        const relatedGroup = groups.find(group => group.id === groupId)

        if (relatedGroup) {
          const since = relatedGroup?.lastMessageTime ?? undefined

          if (isRefresh) {
            this.countdownService.getCountdown(CountdownNames.RefreshGroupChat + groupId)?.startCountdown()
          }

          return this.connectionsHttpService.loadChat({ chatId: groupId, chatType: ChatTypes.Group, since }).pipe(
            map(chatResponse => {
              this.snackbarService.open(isRefresh ? 'refreshed' : 'chat loaded')

              if (chatResponse.Count === 0) {
                return connectionsGroupsApiActions.loadGroupChatSuccess({ group: relatedGroup })
              }

              const lastMessageTime = chatResponse.Items.sort((a, b) => Number(a.createdAt.S) - Number(b.createdAt.S))[
                chatResponse.Items.length - 1
              ].createdAt.S

              const chatMessages = [
                ...(relatedGroup.messages ?? []),
                ...chatResponse.Items.map(message => ({
                  authorID: message.authorID.S,
                  message: message.message.S,
                  createdAt: message.createdAt.S,
                  authorName: users.find(user => user.uid === message.authorID.S)?.name ?? 'Unknown user',
                  isAuthorMe: message.authorID.S === profileData?.uid,
                })),
              ]

              return connectionsGroupsApiActions.loadGroupChatSuccess({
                group: {
                  ...relatedGroup,
                  messages: chatMessages,
                  lastMessageTime,
                },
              })
            }),
            catchError(({ message }: Error) => {
              this.snackbarService.open(message)

              return of(connectionsGroupsApiActions.loadGroupChatFailure({ errorMessage: message }))
            }),
          )
        }

        return of(connectionsGroupsApiActions.loadGroupChatFailure({ errorMessage: 'Group was not found' }))
      }),
    ),
  )

  public loadConversationEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(conversationPageActions.loadConversationChat),
      withLatestFrom(this.homeFacade.users$, this.profileFacade.profileData$),
      switchMap(([{ conversationId, isRefresh }, users, profileData]) => {
        const relatedUser = users.find(user => user.conversationId === conversationId)

        if (relatedUser) {
          const since = relatedUser?.lastMessageTime ?? undefined

          return this.connectionsHttpService
            .loadChat({
              chatId: conversationId,
              chatType: ChatTypes.Conversation,
              since,
            })
            .pipe(
              map(chatResponse => {
                this.snackbarService.open(isRefresh ? 'refreshed' : 'chat loaded')

                if (isRefresh) {
                  this.countdownService
                    .getCountdown(CountdownNames.RefreshConversationChat + conversationId)
                    ?.startCountdown()
                }

                if (chatResponse.Count === 0) {
                  return connectionsUsersApiActions.loadConversationChatSuccess({ user: relatedUser })
                }

                const lastMessageTime = chatResponse.Items.sort(
                  (a, b) => Number(a.createdAt.S) - Number(b.createdAt.S),
                )[chatResponse.Items.length - 1].createdAt.S

                const chatMessages = [
                  ...(relatedUser.messages ?? []),
                  ...chatResponse.Items.map(message => ({
                    authorID: message.authorID.S,
                    message: message.message.S,
                    createdAt: message.createdAt.S,
                    isAuthorMe: message.authorID.S !== relatedUser.uid,
                    // eslint-disable-next-line no-negated-condition
                    authorName: message.authorID.S !== relatedUser.uid ? profileData?.name : relatedUser.name,
                  })),
                ]

                return connectionsUsersApiActions.loadConversationChatSuccess({
                  user: {
                    ...relatedUser,
                    messages: chatMessages,
                    lastMessageTime,
                  },
                })
              }),
            )
        }

        return of(
          connectionsUsersApiActions.loadConversationChatFailure({ errorMessage: 'Conversation was not found' }),
        )
      }),
    ),
  )

  public sendMessageToGroupEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupPageActions.sendMessageToGroup),
      switchMap(({ groupId, message }) => {
        return this.connectionsHttpService.sendMessage({ chatId: groupId, message, chatType: ChatTypes.Group }).pipe(
          map(response => {
            if (response.ok) {
              this.homeFacade.loadGroupChat({ groupId })

              return connectionsGroupsApiActions.sendMessageSuccess()
            }

            return connectionsGroupsApiActions.sendMessageFailure({ errorMessage: ErrorMessages.SomethingWentWrong })
          }),
          catchError((error: Error) => {
            this.snackbarService.open(error.message)

            return of(connectionsGroupsApiActions.sendMessageFailure({ errorMessage: error.message }))
          }),
        )
      }),
    ),
  )

  public sendMessageToConversationEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(conversationPageActions.sendMessageToConversation),
      switchMap(({ conversationId, message }) => {
        return this.connectionsHttpService
          .sendMessage({ chatId: conversationId, message, chatType: ChatTypes.Conversation })
          .pipe(
            map(response => {
              if (response.ok) {
                this.homeFacade.loadConversationChat({ conversationId })

                return connectionsUsersApiActions.sendMessageToConversationSuccess()
              }

              return connectionsUsersApiActions.sendMessageToConversationFailure({
                errorMessage: ErrorMessages.SomethingWentWrong,
              })
            }),
            catchError((error: Error) => {
              this.snackbarService.open(error.message)

              return of(connectionsUsersApiActions.sendMessageToConversationFailure({ errorMessage: error.message }))
            }),
          )
      }),
    ),
  )
}
