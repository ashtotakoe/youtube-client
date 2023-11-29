import { createFeatureSelector, createSelector } from '@ngrx/store'

import { StoreFeatureNames } from '../../core/enums/store-feature-names.enum'
import type { SearchState } from '../models/initial-state.model'

const searchFeatureSelector = createFeatureSelector<SearchState>(StoreFeatureNames.Search)

export const selectIsLoading = createSelector(searchFeatureSelector, state => state.isLoading)

export const selectSearchVideos = createSelector(searchFeatureSelector, state => state.searchVideos)

export const selectCreatedVideos = createSelector(searchFeatureSelector, state => state.createdVideos)

export const selectVideoDetails = createSelector(searchFeatureSelector, state => state.videoDetails)

export const selectErrorMessage = createSelector(searchFeatureSelector, state => state.errorMessage)
