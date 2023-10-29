import { Component } from '@angular/core'

import { SearchItemsService } from '../../services/search-items.service'

@Component({
  selector: 'yt-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [SearchItemsService],
})
export class SearchResultsComponent {
  public searchItems$ = this.searchItems.relevantItems$

  constructor(private searchItems: SearchItemsService) {}
}
