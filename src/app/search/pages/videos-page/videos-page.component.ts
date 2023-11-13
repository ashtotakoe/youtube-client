import { ChangeDetectionStrategy, Component } from '@angular/core'
import { combineLatest, map, type Observable } from 'rxjs'

import { SortStateService } from '../../../core/services/sort-state.service'
import type { SearchItem } from '../../../shared/models/search-item.model'
import type { VideosAndSortData } from '../../models/videos-and-sort-data.model'
import { SearchItemsService } from '../../services/search-items.service'

@Component({
  selector: 'yt-search-results',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss'],
  providers: [SearchItemsService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideosPageComponent {
  public videos$ = this.searchItemsService.videos$
  private sortState$ = this.sortStateService.sortState$

  public defaultSearchItemsAndSortOptions: { videos: SearchItem[]; sortData: null } = {
    videos: [],
    sortData: null,
  }

  public videosAndSortData$: Observable<VideosAndSortData> = combineLatest([this.videos$, this.sortState$]).pipe(
    map(([videos, sortData]) => ({ videos, sortData })),
  )

  constructor(
    private searchItemsService: SearchItemsService,
    private sortStateService: SortStateService,
  ) {}
}
