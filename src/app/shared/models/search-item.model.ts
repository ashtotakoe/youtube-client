export interface SearchItem {
  king: string
  etag: RegExp
  id: string
  snippet: SearchItemSnippet
  statistics: Record<'viewCount' | 'likeCount' | 'dislikeCount' | 'favoriteCount' | 'commentCount', string>
}

interface SearchItemSnippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Record<'default' | 'medium' | 'high' | 'standard' | 'maxres', Thumbnail>
  channelTittle: string
  tags: string[]
  categoryId: string
  liveBroadcastContent: string
  localized: Record<'title' | 'description', string>
  defaultAudioLanguage: string
}

interface Thumbnail {
  url: string
  width: number
  height: number
}
