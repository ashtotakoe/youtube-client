import { createFeatureSelector, createSelector } from '@ngrx/store'

import type { HomeState } from './models/home-state.model'
import { StoreFeatureNames } from 'src/app/shared/enums/store-feature-names.enum'

const homeFeatureSelector = createFeatureSelector<HomeState>(StoreFeatureNames.Home)

export const selectIsLoading = createSelector(homeFeatureSelector, state => state.isLoading)

export const selectGroups = createSelector(homeFeatureSelector, state => state.groups)

export const selectUsers = createSelector(homeFeatureSelector, state => state.users)
