import { ChangeDetectionStrategy, Component } from '@angular/core'
import { combineLatest, map, type Observable } from 'rxjs'

import { SortStateService } from '../../../core/services/sort-state.service'
import { VideosFacade } from '../../../core/videos-store/services/videos.facade'
import type { VideoData } from '../../../shared/models/video-data.model'
import type { VideosAndSortData } from '../../models/videos-and-sort-data.model'

@Component({
  selector: 'yt-search-results',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideosPageComponent {
  private searchVideos$ = this.searchFacade.searchVideos$
  private favoriteVideos$ = this.searchFacade.favoriteVideos$
  private sortState$ = this.sortState.sortState$

  public isLoading$ = this.searchFacade.isLoading$

  public searchVideosAndSortData$: Observable<VideosAndSortData> = combineLatest([
    this.searchVideos$,
    this.sortState$,
  ]).pipe(map(([videos, sortData]) => ({ videos, sortData })))

  public favoriteVideosAndSortData$: Observable<VideosAndSortData> = combineLatest([
    this.favoriteVideos$,
    this.sortState$,
  ]).pipe(map(([videos, sortData]) => ({ videos, sortData })))

  public defaultVideosAndSortOptions: { videos: VideoData[]; sortData: null } = {
    videos: [],
    sortData: null,
  }

  constructor(
    private sortState: SortStateService,
    private searchFacade: VideosFacade,
  ) {}
}
