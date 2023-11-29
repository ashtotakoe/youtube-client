import type { PageInfo } from './page-Info.model'
import type { VideoData } from './video-data.model'

export interface YoutubeResponse {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TODO: string
  kind: string
  etag: string
  pageInfo?: PageInfo
  items: VideoData[]
}
