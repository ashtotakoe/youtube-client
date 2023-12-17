import { createReducer } from '@ngrx/store'

import type { HomeState } from './models/home-state.model'

const homeInitialState: HomeState = {
  errorMessage: null,
  isLoading: false,
}

export const homeReducer = createReducer(homeInitialState)
