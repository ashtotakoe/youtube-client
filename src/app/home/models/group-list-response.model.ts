import type { Group } from './group.model'
import type { WithSKey } from 'src/app/shared/types/with-s-key.type'

/* eslint-disable @typescript-eslint/naming-convention */
export interface GroupListResponse {
  Count: number
  Items: Array<WithSKey<Group>>
}
