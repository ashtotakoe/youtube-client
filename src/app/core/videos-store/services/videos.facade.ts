import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import type { VideoData } from '../../../shared/models/video-data.model'
import { createVideoAction } from '../actions/create-video-form.actions'
import { favoriteVideosActions } from '../actions/favorite-videos.actions'
import { videoDetailsActions } from '../actions/videos-details.actions'
import { videosPageActions } from '../actions/videos-page.actions'
import {
  selectCreatedVideos,
  selectErrorMessage,
  selectFavoriteVideos,
  selectIsLoading,
  selectSearchVideos,
  selectVideoDetails,
} from '../videos.selectors'

@Injectable({
  providedIn: 'root',
})
export class VideosFacade {
  public isLoading$ = this.store$.select(selectIsLoading)
  public errorMessage$ = this.store$.select(selectErrorMessage)
  public searchVideos$ = this.store$.select(selectSearchVideos)
  public createdVideos$ = this.store$.select(selectCreatedVideos)
  public videoDetails$ = this.store$.select(selectVideoDetails)
  public favoriteVideos$ = this.store$.select(selectFavoriteVideos)

  constructor(private store$: Store) {}

  public loadVideosByQuery(query: string): void {
    this.store$.dispatch(videosPageActions.loadVideosByQuery({ query }))
  }

  public loadVideoById(id: string): void {
    this.store$.dispatch(videoDetailsActions.loadVideoById({ id }))
  }

  public createVideo(createdVideo: VideoData): void {
    this.store$.dispatch(createVideoAction({ createdVideo }))
  }

  public addFavoriteVideo(videoData: VideoData): void {
    this.store$.dispatch(favoriteVideosActions.addToFavoriteVideos({ videoData }))
  }

  public removeFavoriteVideo(videoData: VideoData): void {
    this.store$.dispatch(favoriteVideosActions.removeFromFavoriteVideos({ videoData }))
  }
}
