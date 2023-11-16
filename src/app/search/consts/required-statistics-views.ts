import type { VideoStatistics } from '../../shared/models/statistics.model'

export const requiredStatisticsViews: Array<keyof VideoStatistics> = ['viewCount', 'commentCount', 'likeCount']
