import { ChangeDetectionStrategy, Component } from '@angular/core'

import { SearchFacade } from '../../search-store/services/search.facade'

@Component({
  selector: 'yt-video-details-page',
  templateUrl: './video-details-page.component.html',
  styleUrls: ['./video-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoDetailsPageComponent {
  public videoDetails$ = this.searchFacade.videoDetails$
  public isLoading$ = this.searchFacade.isLoading$
  public errorMessage$ = this.searchFacade.errorMessage$

  constructor(private searchFacade: SearchFacade) {}
}
