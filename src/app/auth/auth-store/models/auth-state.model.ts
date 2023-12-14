import type { UserData } from 'src/app/shared/models/user-data.model'

export interface AuthState {
  user: UserData | null
  isLoading: boolean
  errorMessage: string | null
}
