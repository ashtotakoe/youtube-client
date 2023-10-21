import type { SearchItem } from './search-item.model'

export interface SearchResponse {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TODO: string
  kind: string
  etag: string
  pageInfo: Record<'totalResults' | 'resultsPerPage', number>
  items: SearchItem[]
}
