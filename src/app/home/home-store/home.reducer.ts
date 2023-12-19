import { createReducer, on } from '@ngrx/store'

import { connectionsGroupsApiActions } from './actions/connections-groups-api.actions'
import { connectionsUsersApiActions } from './actions/connections-users-api.actions'
import { createGroupFormActions } from './actions/create-group-form.actions'
import { groupsListActions } from './actions/group-list.actions'
import { usersListActions } from './actions/users-list.actions'
import type { HomeState } from './models/home-state.model'

const homeInitialState: HomeState = {
  errorMessage: null,
  isLoading: false,
  groups: [],
  users: [],
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
)
