import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import type { SearchData } from '../../../shared/models/search-data.model'
import type { VideoData } from '../../../shared/models/video-data.model'
import { SearchStateService } from '../../services/search-state.service'
import { createVideoAction } from '../actions/create-video-form.actions'
import { favoriteButtonActions } from '../actions/favorite-button.actions'
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

  constructor(
    private store$: Store,
    private searchStateService: SearchStateService,
  ) {}

  public loadVideosByQuery(searchValues: Partial<SearchData>): void {
    const searchData = this.searchStateService.updateSearchState(searchValues)
    this.store$.dispatch(videosPageActions.loadVideosViaSearch({ searchData }))
  }

  public loadVideoById(id: string): void {
    this.store$.dispatch(videoDetailsActions.loadVideoById({ id }))
  }

  public createVideo(createdVideo: VideoData): void {
    this.store$.dispatch(createVideoAction({ createdVideo }))
  }

  public toggleFavoriteVideo(videoData: VideoData): void {
    this.store$.dispatch(favoriteButtonActions.toggleFavoriteVideo({ video: videoData }))
  }
}
