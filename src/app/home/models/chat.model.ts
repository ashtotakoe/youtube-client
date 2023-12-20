import type { Message } from './message.model'

export interface GroupChat {
  groupId: string
  messages: Message[]
  lastMessageTime: string
}
