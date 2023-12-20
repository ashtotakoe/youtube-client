import type { Message } from './message.model'
import type { WithSKey } from 'src/app/shared/types/with-s-key.type'

/* eslint-disable @typescript-eslint/naming-convention */
export interface MessageResponse {
  Count: number
  Items: Array<WithSKey<Message>>
}
