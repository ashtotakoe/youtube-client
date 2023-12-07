import type { Snippet } from './snippet.model'
import type { VideoStatistics } from './statistics.model'

export interface Data {
  king?: string
  etag?: string
  snippet: Snippet
  statistics: VideoStatistics
}

export interface SearchItem extends Data {
  id: VideoId
}

export interface VideoData extends Data {
  isCustomCreated?: boolean
  id: string
}

interface VideoId {
  kind: string
  videoId: string
}
