import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core'

import { VideoData } from '../../../shared/models/video-data.model'

@Component({
  selector: 'yt-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoComponent implements OnInit {
  @Input() public video!: VideoData
  public videoId!: string

  public ngOnInit(): void {
    this.videoId = typeof this.video.id === 'string' ? this.video.id : this.video.id.videoId
  }
}
