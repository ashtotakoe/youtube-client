import type { Group } from '../../models/group.model'

export interface HomeState {
  errorMessage: string | null
  isLoading: boolean
  groups: Group[] | null
}
