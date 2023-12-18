import { createReducer, on } from '@ngrx/store'

import { connectionsGroupsApiActions } from './actions/connections-groups-api.actions'
import { createGroupFormActions } from './actions/create-group-form.actions'
import { groupsListActions } from './actions/group-list.actions'
import type { HomeState } from './models/home-state.model'

const homeInitialState: HomeState = {
  errorMessage: null,
  isLoading: false,
  groups: [],
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
)
