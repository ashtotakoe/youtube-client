import { createReducer, on } from '@ngrx/store'

import type { SearchState } from '../models/initial-state.model'
import { videoDetailsActions } from './actions/videos-details.actions'
import { videosPageActions } from './actions/videos-page.actions'
import { youtubeApiActions } from './actions/youtube-api.actions'

const cardsInitialState: SearchState = {
  searchVideos: [],
  createdVideos: [],
  favoriteVideos: [],
  videoDetails: null,
  isLoading: false,
  errorMessage: null,
}

export const videosReducer = createReducer(
  cardsInitialState,
  on(videosPageActions.loadVideosByQuery, state => ({ ...state, isLoading: true })),

  on(youtubeApiActions.loadVideoByIdSuccess, (state, { video }) => ({
    ...state,
    videoDetails: video,
    isLoading: false,
    errorMessage: null,
  })),

  on(youtubeApiActions.loadVideoByIdFailure, (state, { errorMessage }) => ({
    ...state,
    videoDetails: null,
    isLoading: false,
    errorMessage,
  })),

  on(youtubeApiActions.loadVideosByQuerySuccess, (state, { videos }) => ({
    ...state,
    searchVideos: videos,
    isLoading: false,
    errorMessage: null,
  })),

  on(youtubeApiActions.loadVideosByQueryFailure, (state, { errorMessage }) => ({
    ...state,
    searchVideos: [],
    isLoading: false,
    errorMessage,
  })),

  on(videoDetailsActions.loadVideoById, state => ({
    ...state,
    isLoading: true,
    videoDetails: null,
  })),
)
