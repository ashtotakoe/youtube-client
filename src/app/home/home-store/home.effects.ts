import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs'

import type { Group } from '../models/group.model'
import { connectionsGroupsApiActions } from './actions/connections-groups-api.actions'
import { createGroupFormActions } from './actions/create-group-form.actions'
import { groupsListActions } from './actions/group-list.actions'
import { HomeFacade } from './services/home.facade'
import { ConnectionsHttpService } from 'src/app/core/api/services/connections-http.service'
import { ErrorMessages } from 'src/app/core/enums/error-messages.enum'
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service'
import { ProfileFacade } from 'src/app/profile/profile-store/services/profile.facade'
import { CountdownService } from 'src/app/shared/services/countdown.service'

@Injectable()
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private connectionsHttpService: ConnectionsHttpService,
    private snackbarService: MatSnackBarService,
    private homeFacade: HomeFacade,
    private profileFacade: ProfileFacade,
    private countdownService: CountdownService,
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
              this.countdownService.startCountdown()
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

            // dialogRef.close()
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
}
