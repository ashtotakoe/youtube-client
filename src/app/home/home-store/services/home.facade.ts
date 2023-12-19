import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { createGroupFormActions } from '../actions/create-group-form.actions'
import { groupsListActions } from '../actions/group-list.actions'
import { usersListActions } from '../actions/users-list.actions'
import { selectGroups, selectIsLoading, selectUsers } from '../home.selectors'

@Injectable()
export class HomeFacade {
  public isLoading$ = this.store.select(selectIsLoading)
  public groups$ = this.store.select(selectGroups)
  public users$ = this.store.select(selectUsers)

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

  public loadUsers({ isCashed }: { isCashed: boolean }): void {
    this.store.dispatch(usersListActions.loadUsers({ isCashed }))
  }
}
