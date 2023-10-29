import { Component, Input } from '@angular/core'

import { Statistics } from '../../../shared/models/statistics.model'

@Component({
  selector: 'yt-video-statistics',
  templateUrl: './video-statistics.component.html',
  styleUrls: ['./video-statistics.component.scss'],
})
export class VideoStatisticsComponent {
  @Input() public statistics?: Statistics
}
