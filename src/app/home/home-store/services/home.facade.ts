import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { createGroupFormActions } from '../actions/create-group-form.actions'
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

  public createNewGroup(newGroupName: string): void {
    this.store.dispatch(createGroupFormActions.createNewGroup({ newGroupName }))
  }

  public deleteGroup(groupId: string): void {
    this.store.dispatch(groupsListActions.deleteGroup({ groupId }))
  }
}
