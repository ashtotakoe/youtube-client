import { createReducer, on } from '@ngrx/store'

import { connectionsApiActions } from './actions/connections-api.actions'
import { signUpPageActions } from './actions/sing-up-page.actions'
import type { AuthState } from './models/auth-state.model'

const authInitialState: AuthState = {
  userRegistrationData: null,
  isLoading: false,
  errorMessage: null,
}

export const authReducer = createReducer(
  authInitialState,
  on(signUpPageActions.signUp, state => ({
    ...state,
    isLoading: true,
  })),

  on(connectionsApiActions.signUpSuccess, (state, { userRegistrationData }) => ({
    ...state,
    userRegistrationData,
    isLoading: false,
  })),

  on(connectionsApiActions.signUpFailure, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    userRegistrationData: null,
    isLoading: false,
  })),
)
