import { createReducer, on } from '@ngrx/store'

import { connectionsApiActions } from './actions/connections-api.actions'
import { signInPageActions } from './actions/sign-in-page.actions'
import { signUpPageActions } from './actions/sing-up-page.actions'
import type { AuthState } from './models/auth-state.model'

const authInitialState: AuthState = {
  isUserAuthorized: false,
  isLoading: false,
  errorMessage: null,
}

export const authReducer = createReducer(
  authInitialState,
  on(signUpPageActions.signUp, state => ({
    ...state,
    isLoading: true,
  })),

  on(connectionsApiActions.signUpSuccess, state => ({
    ...state,
    isLoading: false,
    errorMessage: null,
  })),

  on(connectionsApiActions.signUpFailure, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    isLoading: false,
  })),

  on(signInPageActions.signIn, state => ({
    ...state,
    isLoading: true,
  })),

  on(connectionsApiActions.signInSuccess, state => ({
    ...state,
    isUserAuthorized: true,
    isLoading: false,
  })),

  on(connectionsApiActions.signInFailure, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    isUserAuthorized: false,
    isLoading: false,
  })),
)
