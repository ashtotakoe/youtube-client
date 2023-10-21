export interface SearchItem {
  king: string
  etag: RegExp
  id: string
  snippet: SearchItemSnippet
  statistics: Statistics
}

interface SearchItemSnippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTittle: string
  tags: string[]
  categoryId: string
  liveBroadcastContent: string
  localized: Record<'title' | 'description', string>
  defaultAudioLanguage: string
}

interface Thumbnails {
  default: Thumbnail
  medium: Thumbnail
  high: Thumbnail
  standard: Thumbnail
  maxres: Thumbnail
}

interface Statistics {
  viewCount: string
  likeCount: string
  dislikeCount: string
  favoriteCount: string
  commentCount: string
}

interface Thumbnail {
  url: string
  width: number
  height: number
}
