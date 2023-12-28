import type { SortData } from '../../shared/models/sort-data.model'
import type { VideoData } from '../../shared/models/video-data.model'

export interface VideosAndSortData {
  videos: VideoData[]
  sortData: SortData | null
}
