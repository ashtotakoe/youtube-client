import { createReducer, on } from '@ngrx/store'

import { connectionsProfileApiActions } from './actions/connections-profile-api.actions'
import { profilePageActions } from './actions/profile-page.actions'
import type { ProfileState } from './models/profile-state.model'

const profileInitialState: ProfileState = {
  profile: null,
  isLoading: false,
  errorMessage: null,
}

export const profileReducer = createReducer(
  profileInitialState,
  on(profilePageActions.loadProfileData, state => ({
    ...state,
    isLoading: true,
  })),
  on(connectionsProfileApiActions.loadProfileDataSuccess, (state, { userProfileData }) => ({
    ...state,
    profile: userProfileData,
    isLoading: false,
    errorMessage: null,
  })),
  on(connectionsProfileApiActions.loadProfileDataFailure, (state, { errorMessage }) => ({
    ...state,
    isLoading: false,
    errorMessage,
  })),
)
