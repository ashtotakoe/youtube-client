import { ChangeDetectionStrategy, Component } from '@angular/core'
import type { PageEvent } from '@angular/material/paginator'
import { combineLatest, map, type Observable } from 'rxjs'

import { SortStateService } from '../../../core/services/sort-state.service'
import { VideosFacade } from '../../../core/videos-store/services/videos.facade'
import type { SearchData } from '../../../shared/models/search-data.model'
import type { VideoData } from '../../../shared/models/video-data.model'
import type { PageData } from '../../../shared/models/youtube-response.model'
import type { VideosAndSortData } from '../../models/videos-and-sort-data.model'

@Component({
  selector: 'yt-search-results',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideosPageComponent {
  private searchVideos$ = this.videosFacade.searchVideos$
  private favoriteVideos$ = this.videosFacade.favoriteVideos$
  private sortState$ = this.sortState.sortState$

  public isLoading$ = this.videosFacade.isLoading$
  public pageData$ = this.videosFacade.pageData$

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
    private videosFacade: VideosFacade,
  ) {}

  public onPageChange({ pageIndex, previousPageIndex }: PageEvent, { prevPageToken, nextPageToken }: PageData): void {
    if (pageIndex !== undefined && previousPageIndex !== undefined) {
      const searchData: Partial<SearchData> = {
        pageToken: pageIndex - previousPageIndex > 0 ? nextPageToken : prevPageToken,
        isFirstPage: pageIndex === 0,
      }

      this.videosFacade.loadVideosByQuery(searchData)
    }
  }
}
