import type { PageInfo } from './page-Info.model'
import type { Data } from './video-data.model'

export interface YoutubeResponse<T extends Data> {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TODO: string
  kind: string
  etag: string
  pageInfo?: PageInfo
  items: T[]
}
