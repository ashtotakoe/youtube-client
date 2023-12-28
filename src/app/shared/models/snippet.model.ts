import type { Thumbnails } from './thumbnails.model'

export interface Snippet {
  publishedAt: string
  channelId?: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTittle?: string
  tags: string[]
  categoryId?: string
  liveBroadcastContent?: string
  localized?: Record<'title' | 'description', string>
  defaultAudioLanguage?: string
}
