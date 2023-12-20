import type { GroupChat } from '../../models/chat.model'
import type { Group } from '../../models/group.model'
import type { User } from '../../models/user.model'

export interface HomeState {
  errorMessage: string | null
  isLoading: boolean
  groups: Group[]
  users: User[]
  currentChat: Group | null
}
