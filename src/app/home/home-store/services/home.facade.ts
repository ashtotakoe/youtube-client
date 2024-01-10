import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { conversationPageActions } from '../actions/conversation-page.actions'
import { createGroupFormActions } from '../actions/create-group-form.actions'
import { groupsListActions } from '../actions/group-list.actions'
import { groupPageActions } from '../actions/group-page.actions'
import { usersListActions } from '../actions/users-list.actions'
import {
  selectCurrentConversationChat,
  selectCurrentGroupChat,
  selectGroups,
  selectIsLoading,
  selectUsers,
} from '../home.selectors'

@Injectable()
export class HomeFacade {
  public isLoading$ = this.store.select(selectIsLoading)
  public groups$ = this.store.select(selectGroups)
  public users$ = this.store.select(selectUsers)
  public currentGroupChat$ = this.store.select(selectCurrentGroupChat)
  public currentConversationChat$ = this.store.select(selectCurrentConversationChat)

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

  public deleteConversation(conversationId: string): void {
    this.store.dispatch(conversationPageActions.deleteConversation({ conversationId }))
  }

  public loadUsers({ isCashed }: { isCashed: boolean }): void {
    this.store.dispatch(usersListActions.loadUsers({ isCashed }))
  }

  public createConversation(userId: string): void {
    this.store.dispatch(usersListActions.createConversation({ userId }))
  }

  public loadGroupChat({ groupId, isRefresh }: { groupId: string; isRefresh?: boolean }): void {
    this.store.dispatch(groupPageActions.loadGroupChat({ groupId, isRefresh }))
  }

  public sendMessageToGroup({ groupId, message }: { groupId: string; message: string }): void {
    this.store.dispatch(groupPageActions.sendMessageToGroup({ groupId, message }))
  }

  public sendMessageToConversation({ conversationId, message }: { conversationId: string; message: string }): void {
    this.store.dispatch(conversationPageActions.sendMessageToConversation({ conversationId, message }))
  }

  public loadConversationChat({ conversationId, isRefresh }: { conversationId: string; isRefresh?: boolean }): void {
    this.store.dispatch(conversationPageActions.loadConversationChat({ conversationId, isRefresh }))
  }
}
