import { createReducer, on } from '@ngrx/store'

import { connectionsRegistrationApiActions } from './actions/connections-registration-api.actions'
import { signInPageActions } from './actions/sign-in-page.actions'
import { signUpPageActions } from './actions/sing-up-page.actions'
import type { AuthState } from './models/auth-state.model'

const authInitialState: AuthState = {
  isLoading: false,
  errorMessage: null,
}

export const authReducer = createReducer(
  authInitialState,
  on(signUpPageActions.signUp, state => ({
    ...state,
    isLoading: true,
  })),

  on(connectionsRegistrationApiActions.signUpSuccess, state => ({
    ...state,
    isLoading: false,
    errorMessage: null,
  })),

  on(connectionsRegistrationApiActions.signUpFailure, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    isLoading: false,
  })),

  on(signInPageActions.signIn, state => ({
    ...state,
    isLoading: true,
  })),

  on(connectionsRegistrationApiActions.signInSuccess, state => ({
    ...state,
    isLoading: false,
    errorMessage: null,
  })),

  on(connectionsRegistrationApiActions.signInFailure, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    isLoading: false,
  })),
)
