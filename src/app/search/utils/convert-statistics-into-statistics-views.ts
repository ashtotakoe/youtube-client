import type { VideoStatistics } from '../../shared/models/statistics.model'
import { requiredStatisticsViews } from '../consts/required-statistics-views'
import { statisticsIconNames } from '../consts/statistics-icon-names'
import type { StatisticsView } from '../models/statistics-view.model'

export const convertStatisticsIntoViews = (statistics?: VideoStatistics): StatisticsView[] => {
  if (!statistics) {
    return []
  }

  return requiredStatisticsViews.map(key => ({
    iconName: statisticsIconNames[key],
    count: Number(statistics[key]),
  }))
}
