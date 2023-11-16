import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import type { VideoStatistics } from '../../../shared/models/statistics.model'
import type { StatisticsView } from '../../interfaces/statistics-view.interface'
import { convertStatisticsIntoViews } from '../../utils/convert-statistics-into-statistics-views'

@Component({
  selector: 'yt-video-statistics',
  templateUrl: './video-statistics.component.html',
  styleUrls: ['./video-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoStatisticsComponent {
  @Input() public set statistics(statistics: VideoStatistics | undefined) {
    this.statisticsViews = convertStatisticsIntoViews(statistics)
  }
  public statisticsViews!: StatisticsView[]
}
