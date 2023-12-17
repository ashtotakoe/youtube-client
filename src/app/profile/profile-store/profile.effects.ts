import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs'

import { connectionsProfileApiActions } from './actions/connections-profile-api.actions'
import { profilePageActions } from './actions/profile-page.actions'
import { ProfileFacade } from './services/profile.facade'
import { ConnectionsHttpService } from 'src/app/core/api/services/connections-http.service'
import { ErrorMessages } from 'src/app/core/enums/error-messages.enum'
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service'

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private connectionsHttpService: ConnectionsHttpService,
    private snackBarService: MatSnackBarService,
    private profileFacade: ProfileFacade,
  ) {}

  public loadProfileDataEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(profilePageActions.loadProfileData),
      withLatestFrom(this.profileFacade.profileData$),
      switchMap(([, profileData]) => {
        if (profileData) {
          return of(connectionsProfileApiActions.loadProfileDataSuccess({ profileData }))
        }

        return this.connectionsHttpService.getUserProfile().pipe(
          map(profileDataFromApi =>
            connectionsProfileApiActions.loadProfileDataSuccess({ profileData: profileDataFromApi }),
          ),
          catchError(({ message }: Error) => {
            this.snackBarService.open(message)

            return of(connectionsProfileApiActions.loadProfileDataFailure({ errorMessage: message }))
          }),
        )
      }),
    ),
  )

  public changeUserNameEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(profilePageActions.changeUserName),

      switchMap(({ name }) =>
        this.connectionsHttpService.changeUserName(name).pipe(
          map(response => {
            if (response.ok) {
              this.snackBarService.open('Name changed successfully')

              return connectionsProfileApiActions.changeUserNameSuccess({ name })
            }

            this.snackBarService.open(ErrorMessages.SomethingWentWrong)

            return connectionsProfileApiActions.changeUserNameFailure({
              errorMessage: ErrorMessages.SomethingWentWrong,
            })
          }),
          catchError(({ message }: Error) => {
            this.snackBarService.open(message)

            return of(connectionsProfileApiActions.changeUserNameFailure({ errorMessage: message }))
          }),
        ),
      ),
    ),
  )
}
