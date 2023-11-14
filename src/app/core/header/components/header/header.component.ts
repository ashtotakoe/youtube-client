import { ChangeDetectionStrategy, Component } from '@angular/core'

import { YoutubeFacade } from '../../../services/youtube.facade'

@Component({
  selector: 'yt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private youtubeFacade: YoutubeFacade) {}

  public isSortingOptionsOpen = false

  public toggleSortingOptions(): void {
    this.isSortingOptionsOpen = !this.isSortingOptionsOpen
  }

  public initSearch(request: string): void {
    this.youtubeFacade.sendRequestByQuery(request)
  }
}
