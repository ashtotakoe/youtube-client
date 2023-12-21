import type { Message } from './message.model'

export interface User {
  name: string
  uid: string
  hasConversationWithMe?: boolean
  conversationId?: string
  lastMessageTime?: string
  messages?: Message[]
}
