import type { UserRegistrationData } from 'src/app/shared/models/user-data.model'

export interface AuthState {
  userRegistrationData: UserRegistrationData | null
  isLoading: boolean
  errorMessage: string | null
}
