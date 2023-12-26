import { createFeatureSelector, createSelector } from '@ngrx/store'

import type { VideosState } from '../../search/models/videos-state.model'
import { StoreFeatureNames } from '../enums/store-feature-names.enum'

const videosFeatureSelector = createFeatureSelector<VideosState>(StoreFeatureNames.Videos)

export const selectIsLoading = createSelector(videosFeatureSelector, ({ isLoading }) => isLoading)

export const selectSearchVideos = createSelector(videosFeatureSelector, ({ searchVideos }) => searchVideos)

export const selectCreatedVideos = createSelector(videosFeatureSelector, ({ createdVideos }) => createdVideos)

export const selectVideoDetails = createSelector(videosFeatureSelector, ({ videoDetails }) => videoDetails)

export const selectErrorMessage = createSelector(videosFeatureSelector, ({ errorMessage }) => errorMessage)

export const selectFavoriteVideos = createSelector(videosFeatureSelector, ({ favoriteVideos }) => favoriteVideos)
