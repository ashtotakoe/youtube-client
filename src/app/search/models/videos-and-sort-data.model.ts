import type { SearchItem } from '../../shared/models/search-item.model'
import type { SortData } from '../../shared/models/sort-data.model'

export interface VideosAndSortData {
  videos: SearchItem[]
  sortData: SortData | null
}
