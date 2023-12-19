/* eslint-disable @typescript-eslint/naming-convention */
import type { Conversation } from './conversation.model'
import type { WithSKey } from 'src/app/shared/types/with-s-key.type'

export interface ConversationsResponse {
  Count: number
  Items: Array<WithSKey<Conversation>>
}
