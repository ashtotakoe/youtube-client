import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, type Observable } from 'rxjs'

import type { SearchData } from '../../../shared/models/search-data.model'
import type { SearchItem, VideoData } from '../../../shared/models/video-data.model'
import type { PageData, YoutubeResponse } from '../../../shared/models/youtube-response.model'
import { SearchStateService } from '../../services/search-state.service'
import { createVideoAction } from '../actions/create-video-form.actions'
import { favoriteVideosActions } from '../actions/favorite-videos.actions'
import { updateSearchResponse } from '../actions/search-response.action'
import { videoDetailsActions } from '../actions/videos-details.actions'
import { videosPageActions } from '../actions/videos-page.actions'
import {
  selectCreatedVideos,
  selectErrorMessage,
  selectFavoriteVideos,
  selectIsLoading,
  selectSearchResponse,
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
  public pageData$: Observable<PageData> = this.store$.select(selectSearchResponse).pipe(
    map(response => ({
      nextPageToken: response?.nextPageToken,
      prevPageToken: response?.prevPageToken,
      pageInfo: response?.pageInfo,
    })),
  )
  constructor(
    private store$: Store,
    private searchStateService: SearchStateService,
  ) {}

  public loadVideosByQuery(searchValues: Partial<SearchData>): void {
    const searchData = this.searchStateService.setSearchState(searchValues)
    this.store$.dispatch(videosPageActions.loadVideosViaSearch({ searchData }))
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

  public updateSearchResponse(response: YoutubeResponse<SearchItem>): void {
    this.store$.dispatch(updateSearchResponse({ response }))
  }
}
