import { ChangeDetectionStrategy, Component } from '@angular/core'
import type { PageEvent } from '@angular/material/paginator'
import { combineLatest, map, type Observable } from 'rxjs'

import { SortStateService } from '../../../core/services/sort-state.service'
import { VideosFacade } from '../../../core/videos-store/services/videos.facade'
import { searchHttpParams } from '../../../core/youtube/consts/search-http-params.const'
import { YoutubeResponseStateService } from '../../../core/youtube/services/youtube-response-state.service'
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

  private isLoading$ = this.videosFacade.isLoading$
  private pageData$ = this.youtubeResponseStateService.pageData$
  private searchVideosAndSortData$: Observable<VideosAndSortData> = combineLatest([
    this.searchVideos$,
    this.sortState$,
  ]).pipe(map(([videos, sortData]) => ({ videos, sortData })))
  private favoriteVideosAndSortData$: Observable<VideosAndSortData> = combineLatest([
    this.favoriteVideos$,
    this.sortState$,
  ]).pipe(map(([videos, sortData]) => ({ videos, sortData })))

  public combinedData$ = combineLatest([
    this.isLoading$,
    this.pageData$,
    this.searchVideosAndSortData$,
    this.favoriteVideosAndSortData$,
  ]).pipe(
    map(([isLoading, pageData, searchVideosAndSortData, favoriteVideosAndSortData]) => ({
      isLoading,
      pageData,
      searchVideosAndSortData,
      favoriteVideosAndSortData,
    })),
  )

  public defaultVideosAndSortOptions: { videos: VideoData[]; sortData: null } = {
    videos: [],
    sortData: null,
  }

  public maxResults = searchHttpParams.maxResults
  constructor(
    private sortState: SortStateService,
    private youtubeResponseStateService: YoutubeResponseStateService,
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
