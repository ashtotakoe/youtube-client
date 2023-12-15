import type { HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { connectionsApiActions } from './actions/connections-api.actions'
import { signUpPageActions } from './actions/sing-up-page.actions'
import { ErrorMessages } from 'src/app/core/enums/error-messages.enum'
import { ConnectionsHttpService } from 'src/app/core/services/connections-http.service'
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service'
import { AuthRoutePaths } from 'src/app/shared/enums/auth-route-paths.enum'

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private connectionsHttpService: ConnectionsHttpService,
    private matSnackBarService: MatSnackBarService,
    private router: Router,
  ) {}

  public signUpEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signUpPageActions.signUp),
      switchMap(({ userRegistrationData }) =>
        this.connectionsHttpService.signUp(userRegistrationData).pipe(
          map((response: HttpResponse<string>) => {
            if (response.ok) {
              this.router.navigate(['/', 'auth', AuthRoutePaths.SignIn], { replaceUrl: true }).catch(() => null)

              return connectionsApiActions.signUpSuccess({ userRegistrationData })
            }

            return connectionsApiActions.signUpFailure({
              errorMessage: ErrorMessages.SomethingWentWrong,
            })
          }),
        ),
      ),
      catchError(({ message }: Error) => {
        this.matSnackBarService.open(message)

        return of(connectionsApiActions.signUpFailure({ errorMessage: message }))
      }),
    ),
  )
}
