import { createReducer, on } from '@ngrx/store'

import type { VideosState } from '../../search/models/videos-state.model'
import { createVideoAction } from './actions/create-video-form.actions'
import { favoriteButtonActions } from './actions/favorite-button.actions'
import { videoDetailsActions } from './actions/videos-details.actions'
import { videosPageActions } from './actions/videos-page.actions'
import { youtubeApiActions } from './actions/youtube-api.actions'

const videosInitialState: VideosState = {
  searchVideos: [],
  createdVideos: [],
  favoriteVideos: [],
  videoDetails: null,
  isLoading: false,
  errorMessage: null,
}

export const videosReducer = createReducer(
  videosInitialState,
  on(createVideoAction, (state, { createdVideo }) => ({
    ...state,
    createdVideos: [...state.createdVideos, createdVideo],
  })),

  on(videosPageActions.loadVideosViaSearch, state => ({ ...state, isLoading: true })),

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

  on(favoriteButtonActions.toggleFavoriteVideo, (state, { video }) => ({
    ...state,
    favoriteVideos: state.favoriteVideos.some(favoriteVideo => favoriteVideo.id === video.id)
      ? state.favoriteVideos.filter(favoriteVideo => favoriteVideo.id !== video.id)
      : [...state.favoriteVideos, video],
  })),
)
