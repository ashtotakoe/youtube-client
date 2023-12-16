import type { HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { connectionsApiActions } from './actions/connections-api.actions'
import { signInPageActions } from './actions/sign-in-page.actions'
import { signUpPageActions } from './actions/sing-up-page.actions'
import { ConnectionsHttpService } from 'src/app/core/api/services/connections-http.service'
import { ErrorMessages } from 'src/app/core/enums/error-messages.enum'
import { LocalStorageKeys } from 'src/app/core/enums/local-storage-keys.enum'
import { LocalStorageService } from 'src/app/core/services/local-storage.service'
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service'
import { AuthRoutePaths } from 'src/app/shared/enums/auth-route-paths.enum'
import type { UserPrivateCredentials } from 'src/app/shared/models/user-private-credentials.model'

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private connectionsHttpService: ConnectionsHttpService,
    private matSnackBarService: MatSnackBarService,
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {}

  public signUpEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signUpPageActions.signUp),
      switchMap(({ userSignInData: userRegistrationData }) =>
        this.connectionsHttpService.signUp(userRegistrationData).pipe(
          map((response: HttpResponse<string>) => {
            if (response.ok) {
              this.router.navigate(['/', 'auth', AuthRoutePaths.SignIn], { replaceUrl: true }).catch(() => null)

              return connectionsApiActions.signUpSuccess()
            }

            return connectionsApiActions.signUpFailure({
              errorMessage: ErrorMessages.SomethingWentWrong,
            })
          }),
          catchError(({ message }: Error) => {
            this.matSnackBarService.open(message)

            return of(connectionsApiActions.signUpFailure({ errorMessage: message }))
          }),
        ),
      ),
    ),
  )

  public signInEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signInPageActions.signIn),
      switchMap(({ userSignInData }) =>
        this.connectionsHttpService.signIn(userSignInData).pipe(
          map(response => {
            if (response.ok && response.body) {
              const body = JSON.parse(response.body) as UserPrivateCredentials

              this.localStorageService.setPrivateCredentials(body)
              this.localStorageService.setItem(LocalStorageKeys.Email, userSignInData.email)

              this.router.navigate(['/', 'home'], { replaceUrl: true }).catch(() => null)

              return connectionsApiActions.signInSuccess()
            }

            this.localStorageService.clear()

            return connectionsApiActions.signInFailure({ errorMessage: ErrorMessages.SomethingWentWrong })
          }),
          catchError(({ message }: Error) => {
            this.localStorageService.clear()

            this.matSnackBarService.open(message)

            return of(connectionsApiActions.signInFailure({ errorMessage: message }))
          }),
        ),
      ),
    ),
  )
}
