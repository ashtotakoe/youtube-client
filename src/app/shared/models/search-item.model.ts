import type { SearchItemSnippet } from './search-Item-snippet.model'
import type { Statistics } from './statistics.model'

export interface SearchItem {
  king: string
  etag: RegExp
  id: string
  snippet: SearchItemSnippet
  statistics: Statistics
}
