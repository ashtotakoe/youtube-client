import type { SearchItemSnippet } from './search-Item-snippet.model'
import type { VideoStatistics } from './statistics.model'

export interface SearchItem {
  king?: string
  etag: string
  id: string
  snippet: SearchItemSnippet
  statistics: VideoStatistics
}
