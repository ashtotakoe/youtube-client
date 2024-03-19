import { ChangeDetectionStrategy, Component, Inject, Input, type OnInit } from '@angular/core'
import { DomSanitizer, type SafeResourceUrl } from '@angular/platform-browser'

import { YOUTUBE_PLAYER_API } from '../../../core/youtube/tokens/youtube-player-api.token'

@Component({
  selector: 'yt-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayerComponent implements OnInit {
  @Input() public videoId!: string
  public iframeLink!: SafeResourceUrl

  constructor(
    @Inject(YOUTUBE_PLAYER_API) public youtubePlayerApi: string,
    private domSanitizer: DomSanitizer,
  ) {}

  public ngOnInit(): void {
    this.iframeLink = this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.youtubePlayerApi}${this.videoId}`)
  }
}
