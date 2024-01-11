import type { WithSKey } from '../types/with-s-key.type'
import type { Message } from 'src/app/home/models/message.model'

export const getSortedMessagesAndLastMessageTime = (
  messages: Array<WithSKey<Message>>,
): { sortedMessages: Message[]; lastMessageTime: string } => {
  const sortedMessages = messages
    .sort((a, b) => Number(a.createdAt.S) - Number(b.createdAt.S))
    .map(message => ({
      message: message.message.S,
      createdAt: message.createdAt.S,
      authorID: message.authorID.S,
    }))

  const lastMessageTime = sortedMessages[sortedMessages.length - 1].createdAt

  return {
    sortedMessages,
    lastMessageTime,
  }
}
