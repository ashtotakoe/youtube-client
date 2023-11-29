import type { Snippet } from './snippet.model'
import type { VideoStatistics } from './statistics.model'

export interface VideoData {
  king?: string
  etag: string
  id: string | VideoId
  snippet: Snippet
  statistics: VideoStatistics
}

interface VideoId {
  kind: string
  videoId: string
}
