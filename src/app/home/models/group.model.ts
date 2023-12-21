import type { Message } from './message.model'

export interface Group {
  id: string
  name: string
  createdAt: string
  createdBy: string
  isCreatedByMe?: boolean
  messages?: Message[]
  lastMessageTime?: string
}
