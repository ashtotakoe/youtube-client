import { ChangeDetectionStrategy, Component } from '@angular/core'

import { SearchFacade } from '../../../../search/search-store/services/search.facade'

@Component({
  selector: 'yt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public isSortingOptionsOpen = false

  constructor(private searchFacade: SearchFacade) {}

  public toggleSortingOptions(): void {
    this.isSortingOptionsOpen = !this.isSortingOptionsOpen
  }

  public initSearch(query: string): void {
    this.searchFacade.loadVideosByQuery(query)
  }
}
