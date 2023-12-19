/* eslint-disable @typescript-eslint/naming-convention */
import type { User } from './user.model'
import type { WithSKey } from 'src/app/shared/types/with-s-key.type'

export interface UsersResponse {
  Count: number
  Items: Array<WithSKey<User>>
}
