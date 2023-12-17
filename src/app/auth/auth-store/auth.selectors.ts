import { createFeatureSelector, createSelector } from '@ngrx/store'

import type { AuthState } from './models/auth-state.model'
import { StoreFeatureNames } from 'src/app/shared/enums/store-feature-names.enum'

const authFeatureSelector = createFeatureSelector<AuthState>(StoreFeatureNames.Auth)

export const isLoadingSelector = createSelector(authFeatureSelector, state => state.isLoading)
