import type { ProfileData } from '../../models/user-profile-data.model'

export interface ProfileState {
  isLoading: boolean
  profileData: ProfileData | null
  errorMessage: string | null
}
