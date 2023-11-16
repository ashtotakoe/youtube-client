import type { VideoStatistics } from '../../shared/models/statistics.model'

export const statisticsIconNames: Record<keyof VideoStatistics, string> = {
  likeCount: 'thumb_up',
  dislikeCount: 'thumb_down',
  commentCount: 'comment',
  viewCount: 'remove_red_eye',
  favoriteCount: 'favorite',
}
