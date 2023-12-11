import { createFeatureSelector, createSelector } from '@ngrx/store'

import type { VideosState } from '../../search/models/videos-state.model'
import { StoreFeatureNames } from '../enums/store-feature-names.enum'

const videosFeatureSelector = createFeatureSelector<VideosState>(StoreFeatureNames.Search)

export const selectIsLoading = createSelector(videosFeatureSelector, state => state.isLoading)

export const selectSearchVideos = createSelector(videosFeatureSelector, state => state.searchVideos)

export const selectCreatedVideos = createSelector(videosFeatureSelector, state => state.createdVideos)

export const selectVideoDetails = createSelector(videosFeatureSelector, state => state.videoDetails)

export const selectErrorMessage = createSelector(videosFeatureSelector, state => state.errorMessage)

export const selectFavoriteVideos = createSelector(videosFeatureSelector, state => state.favoriteVideos)
