import { ChangeDetectionStrategy, Component } from '@angular/core'

import { SearchRequestService } from '../../services/send-search-request.service'

@Component({
  selector: 'yt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private sendRequestService: SearchRequestService) {}

  public initSearch(request: string): void {
    this.sendRequestService.sendRequest(request)
  }
}
