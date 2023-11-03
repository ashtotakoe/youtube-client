import { ChangeDetectionStrategy, Component } from '@angular/core'
import { combineLatest } from 'rxjs'

import { YoutubeSortStateService } from '../../../core/services/youtube-sort-state.service'
import { SearchItemsService } from '../../services/search-items.service'

@Component({
  selector: 'yt-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [SearchItemsService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
  public searchItemsAndSortOptions$ = combineLatest([
    this.searchItems.relevantItems$,
    this.sortState.getSortFormState(),
  ])

  constructor(
    private searchItems: SearchItemsService,
    private sortState: YoutubeSortStateService,
  ) {}
}
