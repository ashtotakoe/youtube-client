import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { VideoStatistics } from '../../../shared/models/statistics.model'

@Component({
  selector: 'yt-video-statistics',
  templateUrl: './video-statistics.component.html',
  styleUrls: ['./video-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoStatisticsComponent {
  @Input() public statistics?: VideoStatistics
}
