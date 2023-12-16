import type { UserProfileData } from '../../models/user-profile-data.model'

export interface ProfileState {
  isLoading: boolean
  profile: UserProfileData | null
  errorMessage: string | null
}
