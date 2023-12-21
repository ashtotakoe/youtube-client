import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs'

import type { ProfileResponse } from '../types/profile-response.type'
import { connectionsProfileApiActions } from './actions/connections-profile-api.actions'
import { profilePageActions } from './actions/profile-page.actions'
import { ProfileFacade } from './services/profile.facade'
import { ConnectionsHttpService } from 'src/app/core/api/services/connections-http.service'
import { ErrorMessages } from 'src/app/core/enums/error-messages.enum'
import { LocalStorageService } from 'src/app/core/services/local-storage.service'
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service'
import { AuthRoutePaths } from 'src/app/shared/enums/auth-route-paths.enum'

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private connectionsHttpService: ConnectionsHttpService,
    private snackBarService: MatSnackBarService,
    private profileFacade: ProfileFacade,
    private localStorageService: LocalStorageService,
    private router: Router,
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
          map(({ email, name, uid, createdAt }: ProfileResponse) => ({
            email: email.S,
            name: name.S,
            uid: uid.S,
            createdAt: createdAt.S,
          })),
          map(profileDataFromApi =>
            connectionsProfileApiActions.loadProfileDataSuccess({ profileData: profileDataFromApi }),
          ),
          catchError(({ message }: Error) => {
            this.snackBarService.open(message)

            this.localStorageService.clear()
            this.router.navigate(['/', 'auth']).catch(() => null)

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

  public logOutEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(profilePageActions.logOut),
      switchMap(() =>
        this.connectionsHttpService.logOut().pipe(
          map(response => {
            if (response.ok) {
              this.snackBarService.open('logout success')

              this.localStorageService.clear()
              this.router.navigate(['/', 'auth', AuthRoutePaths.SignIn], { replaceUrl: true }).catch(() => null)

              return connectionsProfileApiActions.logOutSuccess()
            }

            this.snackBarService.open(ErrorMessages.SomethingWentWrong)

            return connectionsProfileApiActions.logOutFailure({ errorMessage: ErrorMessages.SomethingWentWrong })
          }),

          catchError(({ message }: Error) => {
            this.snackBarService.open(message)

            return of(connectionsProfileApiActions.logOutFailure({ errorMessage: message }))
          }),
        ),
      ),
    ),
  )
}
