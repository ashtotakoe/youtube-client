import type { PageInfo } from './page-Info.model'
import type { SearchItem } from './search-item.model'

export interface YoutubeResponse {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TODO: string
  kind: string
  etag: string
  pageInfo?: PageInfo
  items: SearchItem[]
}
