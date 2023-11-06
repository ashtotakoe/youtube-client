import { ChangeDetectionStrategy, Component } from '@angular/core'
import { combineLatest } from 'rxjs'

import { YoutubeSortStateService } from '../../../core/services/youtube-sort-state.service'
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

  public searchItemsAndSortOptions$ = combineLatest([this.videos$, this.sortState$])

  constructor(
    private searchItemsService: SearchItemsService,
    private sortStateService: YoutubeSortStateService,
  ) {}
}
