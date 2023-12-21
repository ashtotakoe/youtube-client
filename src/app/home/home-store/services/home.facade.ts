import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { combineLatest, filter, take } from 'rxjs'

import { chatWindowActions } from '../actions/chat-window.actions'
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
import { ProfileFacade } from 'src/app/profile/profile-store/services/profile.facade'

@Injectable()
export class HomeFacade {
  public isLoading$ = this.store.select(selectIsLoading)
  public groups$ = this.store.select(selectGroups)
  public users$ = this.store.select(selectUsers)
  public currentGroupChat$ = this.store.select(selectCurrentGroupChat)
  public currentConversationChat$ = this.store.select(selectCurrentConversationChat)

  constructor(
    private store: Store,
    private profileFacade: ProfileFacade,
  ) {}

  public loadGroups({ isCashed }: { isCashed: boolean }): void {
    this.profileFacade.loadProfileData()
    this.profileFacade.profileData$
      .pipe(
        filter(profileData => profileData !== null),
        take(1),
      )
      .subscribe(() => {
        this.store.dispatch(groupsListActions.loadGroups({ isCashed }))
      })
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

  public createConversation(userId: string): void {
    this.store.dispatch(usersListActions.createConversation({ userId }))
  }

  public loadGroupChat({ groupId, isRefresh }: { groupId: string; isRefresh?: boolean }): void {
    this.loadGroups({ isCashed: true })
    this.loadUsers({ isCashed: true })

    combineLatest([this.groups$, this.users$])
      .pipe(
        filter(([groups, users]) => groups.length > 0 && users.length > 0),
        take(1),
      )
      .subscribe(() => {
        this.store.dispatch(groupPageActions.loadGroupChat({ groupId, isRefresh }))
      })
  }

  public sendMessage({ groupId, message }: { groupId: string; message: string }): void {
    this.store.dispatch(chatWindowActions.sendMessage({ groupId, message }))
  }

  public loadConversationChat({ conversationId, isRefresh }: { conversationId: string; isRefresh: boolean }): void {
    this.loadUsers({ isCashed: true })
    this.profileFacade.loadProfileData()

    combineLatest([this.users$, this.profileFacade.profileData$])
      .pipe(
        filter(([users, profileData]) => users.length > 0 && profileData !== null),
        take(1),
      )
      .subscribe(() => {
        console.log('dispatched')
        this.store.dispatch(conversationPageActions.loadConversationChat({ conversationId, isRefresh }))
      })
  }
}
