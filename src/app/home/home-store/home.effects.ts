/* eslint-disable max-nested-callbacks */
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, combineLatest, map, of, switchMap, withLatestFrom } from 'rxjs'

import type { Group } from '../models/group.model'
import { DialogStateService } from '../services/dialog-state.service'
import { connectionsGroupsApiActions } from './actions/connections-groups-api.actions'
import { connectionsUsersApiActions } from './actions/connections-users-api.actions'
import { createGroupFormActions } from './actions/create-group-form.actions'
import { groupsListActions } from './actions/group-list.actions'
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
  ) {}

  public loadGroupsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupsListActions.loadGroups),
      withLatestFrom(this.homeFacade.groups$, this.profileFacade.profileData$),
      switchMap(([{ isCashed }, groups, profileData]) => {
        if (isCashed && groups.length) {
          return of(connectionsGroupsApiActions.loadGroupsSuccess({ groups }))
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
            if (!isCashed) {
              this.countdownService.getCountdown(CountdownNames.RefreshGroupList)?.startCountdown()
            }

            this.snackbarService.open('Groups loaded')

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
                createdBy: profileData.name,
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
        this.connectionsHttpService.deleteGroup(groupId).pipe(
          map(response => {
            if (response.ok) {
              this.snackbarService.open('Group was deleted')

              return connectionsGroupsApiActions.deleteGroupSuccess({ groupId })
            }

            return connectionsGroupsApiActions.createGroupFailure({ errorMessage: ErrorMessages.SomethingWentWrong })
          }),
          catchError(({ message }: Error) => {
            this.snackbarService.open(message)

            return of(connectionsGroupsApiActions.deleteGroupFailure({ errorMessage: message }))
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

        return combineLatest([
          this.connectionsHttpService.loadUsers(),
          this.connectionsHttpService.loadConversations(),
        ]).pipe(
          map(([usersResponse, conversationsResponse]) => {
            const usersFromApi = usersResponse.Items.map(user => {
              const hasConversationWithMe = conversationsResponse.Items.some(
                conversation => conversation.companionID.S === user.uid.S,
              )

              return {
                name: user.name.S,
                uid: user.uid.S,
                hasConversationWithMe,
              }
            }).filter(user => user.uid !== profileData?.uid)

            if (!isCashed) {
              this.countdownService.getCountdown(CountdownNames.RefreshUserList)?.startCountdown()
            }

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
}
