import { ChangeDetectionStrategy, Component } from '@angular/core'
import { combineLatest } from 'rxjs'

import { YoutubeSortStateService } from '../../../core/services/youtube-sort-state.service'
import { SearchItemsService } from '../../services/search-items.service'

@Component({
  selector: 'yt-search-results',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss'],
  providers: [SearchItemsService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsPageComponent {
  public relevantItems$ = this.searchItems.relevantItems$

  public searchItemsAndSortOptions$ = combineLatest([this.relevantItems$, this.sortState.getSortFormState()])

  constructor(
    private searchItems: SearchItemsService,
    private sortState: YoutubeSortStateService,
  ) {}
}
