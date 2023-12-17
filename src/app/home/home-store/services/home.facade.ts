import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { groupsListActions } from '../actions/group-list.actions'
import { selectGroups, selectIsLoading } from '../home.selectors'

@Injectable()
export class HomeFacade {
  public isLoading$ = this.store.select(selectIsLoading)
  public groups$ = this.store.select(selectGroups)

  constructor(private store: Store) {}

  public loadGroups({ isCashed }: { isCashed: boolean }): void {
    this.store.dispatch(groupsListActions.loadGroups({ isCashed }))
  }
}
