import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'

import { connectionsProfileApiActions } from './actions/connections-profile-api.actions'
import { profilePageActions } from './actions/profile-page.actions'
import { ConnectionsHttpService } from 'src/app/core/api/services/connections-http.service'
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service'

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private connectionsHttpService: ConnectionsHttpService,
    private snackBarService: MatSnackBarService,
  ) {}

  public loadProfileDataEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(profilePageActions.loadProfileData),
      switchMap(() =>
        this.connectionsHttpService.getUserProfile().pipe(
          tap(value => console.log),
          map(() => connectionsProfileApiActions.loadProfileDataFailure({ errorMessage: 'buba' })),
          catchError(({ message }: Error) => {
            this.snackBarService.open(message)

            return of(connectionsProfileApiActions.loadProfileDataFailure({ errorMessage: message }))
          }),
        ),
      ),
    ),
  )
}
