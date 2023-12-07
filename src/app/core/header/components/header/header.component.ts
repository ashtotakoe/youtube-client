import { ChangeDetectionStrategy, Component } from '@angular/core'

import { VideosFacade } from '../../../videos-store/services/videos.facade'

@Component({
  selector: 'yt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public isSortingOptionsOpen = false

  constructor(private searchFacade: VideosFacade) {}

  public toggleSortingOptions(): void {
    this.isSortingOptionsOpen = !this.isSortingOptionsOpen
  }

  public initSearch(query: string): void {
    this.searchFacade.loadVideosByQuery(query)
  }
}
