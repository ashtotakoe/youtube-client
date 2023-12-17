import { createReducer, on } from '@ngrx/store'

import { connectionsGroupsApiActions } from './actions/connections-groups-api.actions'
import { groupsListActions } from './actions/group-list.actions'
import type { HomeState } from './models/home-state.model'

const homeInitialState: HomeState = {
  errorMessage: null,
  isLoading: false,
  groups: null,
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
    groups: null,
  })),
)
