import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs'

import type { Group } from '../models/group.model'
import { connectionsGroupsApiActions } from './actions/connections-groups-api.actions'
import { groupsListActions } from './actions/group-list.actions'
import { HomeFacade } from './services/home.facade'
import { ConnectionsHttpService } from 'src/app/core/api/services/connections-http.service'
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service'

@Injectable()
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private connectionsHttpService: ConnectionsHttpService,
    private snackbarService: MatSnackBarService,
    private homeFacade: HomeFacade,
  ) {}

  public loadGroupsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupsListActions.loadGroups),
      withLatestFrom(this.homeFacade.groups$),
      switchMap(([{ isCashed }, groups]) => {
        if (isCashed && groups) {
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
}
