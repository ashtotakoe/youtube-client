import { createReducer, on } from '@ngrx/store'

import type { ProfileData } from '../models/user-profile-data.model'
import { connectionsProfileApiActions } from './actions/connections-profile-api.actions'
import { profilePageActions } from './actions/profile-page.actions'
import type { ProfileState } from './models/profile-state.model'

const profileInitialState: ProfileState = {
  profileData: null,
  isLoading: false,
  errorMessage: null,
}

export const profileReducer = createReducer(
  profileInitialState,
  on(profilePageActions.loadProfileData, state => ({
    ...state,
    isLoading: true,
  })),
  on(connectionsProfileApiActions.loadProfileDataSuccess, (state, { profileData }) => ({
    ...state,
    profileData,
    isLoading: false,
    errorMessage: null,
  })),
  on(connectionsProfileApiActions.loadProfileDataFailure, (state, { errorMessage }) => ({
    ...state,
    isLoading: false,
    errorMessage,
  })),

  on(profilePageActions.changeUserName, state => ({
    ...state,
    isLoading: true,
  })),

  on(connectionsProfileApiActions.changeUserNameSuccess, (state, { name }) => ({
    ...state,
    isLoading: false,
    errorMessage: null,
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    profileData: {
      ...state.profileData,
      name,
    } as ProfileData,
  })),

  on(connectionsProfileApiActions.changeUserNameFailure, (state, { errorMessage }) => ({
    ...state,
    isLoading: false,
    errorMessage,
  })),
)
