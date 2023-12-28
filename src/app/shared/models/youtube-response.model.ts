import type { PageInfo } from './page-Info.model'
import type { Data } from './video-data.model'

export interface YoutubeResponse<T extends Data> extends PageData {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TODO: string
  kind: string
  etag: string

  items: T[]
}

export interface PageData {
  pageInfo?: PageInfo
  nextPageToken?: string
  prevPageToken?: string
}

// split on two response interface
