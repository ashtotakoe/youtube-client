import { createReducer, on } from '@ngrx/store'

import { chatWindowActions } from './actions/chat-window.actions'
import { connectionsGroupsApiActions } from './actions/connections-groups-api.actions'
import { connectionsUsersApiActions } from './actions/connections-users-api.actions'
import { conversationPageActions } from './actions/conversation-page.actions'
import { createGroupFormActions } from './actions/create-group-form.actions'
import { groupsListActions } from './actions/group-list.actions'
import { groupPageActions } from './actions/group-page.actions'
import { usersListActions } from './actions/users-list.actions'
import type { HomeState } from './models/home-state.model'

const homeInitialState: HomeState = {
  errorMessage: null,
  isLoading: false,
  groups: [],
  users: [],
  currentGroupChat: null,
  currentConversationChat: null,
}

export const homeReducer = createReducer(
  homeInitialState,

  on(groupsListActions.loadGroups, state => ({
    ...state,
    isLoading: true,
  })),

  on(connectionsGroupsApiActions.loadGroupsSuccess, (state, { groups }) => ({
    ...state,
    isLoading: false,
    groups,
    errorMessage: null,
  })),

  on(connectionsGroupsApiActions.loadGroupsFailure, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    isLoading: false,
    groups: [],
  })),

  on(createGroupFormActions.createNewGroup, state => ({
    ...state,
    isLoading: true,
  })),

  on(connectionsGroupsApiActions.createGroupSuccess, (state, { group }) => ({
    ...state,
    isLoading: false,
    groups: [group, ...state.groups],
    errorMessage: null,
  })),

  on(connectionsGroupsApiActions.createGroupFailure, (state, { errorMessage }) => ({
    ...state,
    isLoading: false,
    errorMessage,
  })),

  on(groupsListActions.deleteGroup, state => ({
    ...state,
    isLoading: true,
  })),

  on(connectionsGroupsApiActions.deleteGroupSuccess, (state, { groupId }) => ({
    ...state,
    isLoading: false,
    errorMessage: null,
    groups: state.groups.filter(group => group.id !== groupId),
  })),

  on(connectionsGroupsApiActions.deleteGroupFailure, (state, { errorMessage }) => ({
    ...state,
    isLoading: false,
    errorMessage,
  })),

  on(usersListActions.loadUsers, state => ({
    ...state,
    isLoading: true,
  })),

  on(connectionsUsersApiActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    isLoading: false,
    errorMessage: null,
    users,
  })),

  on(connectionsUsersApiActions.loadUsersFailure, (state, { errorMessage }) => ({
    ...state,
    isLoading: false,
    errorMessage,
  })),

  on(usersListActions.createConversation, state => ({
    ...state,
    isLoading: true,
  })),

  on(connectionsUsersApiActions.createConversationSuccess, (state, { conversationId, partnerId }) => ({
    ...state,
    isLoading: false,
    errorMessage: null,
    users: state.users.map(user => {
      if (user.uid === partnerId) {
        return {
          ...user,
          conversationId,
          hasConversationWithMe: true,
        }
      }

      return user
    }),
  })),

  on(connectionsUsersApiActions.createConversationFailure, (state, { errorMessage }) => ({
    ...state,
    isLoading: false,
    errorMessage,
  })),

  on(groupPageActions.loadGroupChat, state => ({
    ...state,
    isLoading: true,
  })),

  on(connectionsGroupsApiActions.loadGroupChatFailure, (state, { errorMessage }) => ({
    ...state,
    isLoading: false,
    errorMessage,
    currentGroupChat: null,
  })),

  on(connectionsGroupsApiActions.loadGroupChatSuccess, (state, { group }) => ({
    ...state,
    isLoading: false,
    errorMessage: null,
    groups: state.groups.map(g => (g.id === group.id ? group : g)),
    currentGroupChat: group,
  })),

  on(conversationPageActions.loadConversationChat, state => ({
    ...state,
    isLoading: true,
  })),

  on(connectionsUsersApiActions.loadConversationChatFailure, (state, { errorMessage }) => ({
    ...state,
    isLoading: false,
    errorMessage,
    currentConversationChat: null,
  })),

  on(connectionsUsersApiActions.loadConversationChatSuccess, (state, { user }) => ({
    ...state,
    isLoading: false,
    errorMessage: null,
    users: state.users.map(u => (u.uid === user.uid ? user : u)),
    currentConversationChat: user,
  })),

  on(chatWindowActions.sendMessage, state => ({
    ...state,
    isLoading: true,
  })),

  on(connectionsGroupsApiActions.sendMessageSuccess, state => ({
    ...state,
    isLoading: false,
    errorMessage: null,
  })),

  on(connectionsGroupsApiActions.sendMessageFailure, (state, { errorMessage }) => ({
    ...state,
    isLoading: false,
    errorMessage,
  })),
)
