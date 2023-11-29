import { ChangeDetectionStrategy, Component } from '@angular/core'
import { combineLatest, map, type Observable } from 'rxjs'

import { YoutubeFacade } from '../../../core/services/youtube.facade'
import type { VideoData } from '../../../shared/models/video-data.model'
import type { VideosAndSortData } from '../../models/videos-and-sort-data.model'
import { SearchFacade } from '../../search-store/services/search.facade'

@Component({
  selector: 'yt-search-results',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideosPageComponent {
  public videos$ = this.searchFacade.searchVideos$
  public isLoading$ = this.searchFacade.isLoading$

  private sortState$ = this.youtubeFacade.sortState$

  public videosAndSortData$: Observable<VideosAndSortData> = combineLatest([this.videos$, this.sortState$]).pipe(
    map(([videos, sortData]) => ({ videos, sortData })),
  )

  public defaultSearchItemsAndSortOptions: { videos: VideoData[]; sortData: null } = {
    videos: [],
    sortData: null,
  }

  constructor(
    private youtubeFacade: YoutubeFacade,
    private searchFacade: SearchFacade,
  ) {}
}
