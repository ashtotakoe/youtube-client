import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { videoDetailsActions } from '../actions/videos-details.actions'
import { videosPageActions } from '../actions/videos-page.actions'
import {
  selectCreatedVideos,
  selectErrorMessage,
  selectIsLoading,
  selectSearchVideos,
  selectVideoDetails,
} from '../search.selectors'

@Injectable({
  providedIn: 'root',
})
export class SearchFacade {
  public isLoading$ = this.store$.select(selectIsLoading)
  public errorMessage$ = this.store$.select(selectErrorMessage)
  public searchVideos$ = this.store$.select(selectSearchVideos)
  public createdVideos$ = this.store$.select(selectCreatedVideos)
  public videoDetails$ = this.store$.select(selectVideoDetails)

  constructor(private store$: Store) {}

  public loadVideosByQuery(query: string): void {
    this.store$.dispatch(videosPageActions.loadVideosByQuery({ query }))
  }

  public loadVideoById(id: string): void {
    this.store$.dispatch(videoDetailsActions.loadVideoById({ id }))
  }
}
