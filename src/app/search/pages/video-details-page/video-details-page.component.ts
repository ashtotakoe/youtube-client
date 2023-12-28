import { ChangeDetectionStrategy, Component } from '@angular/core'

import { VideosFacade } from '../../../core/videos-store/services/videos.facade'

@Component({
  selector: 'yt-video-details-page',
  templateUrl: './video-details-page.component.html',
  styleUrls: ['./video-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoDetailsPageComponent {
  public videoDetails$ = this.videosFacade.videoDetails$
  public isLoading$ = this.videosFacade.isLoading$
  public errorMessage$ = this.videosFacade.errorMessage$

  constructor(private videosFacade: VideosFacade) {}
}
