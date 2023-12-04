import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core'

import { VideoData } from '../../../shared/models/video-data.model'

@Component({
  selector: 'yt-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoComponent {
  @Input() public video!: VideoData
}
