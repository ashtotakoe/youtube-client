import { createActionGroup, props } from '@ngrx/store'

import type { UserProfileData } from '../../models/user-profile-data.model'

export const connectionsProfileApiActions = createActionGroup({
  source: 'Connections Profile API',
  events: {
    'Load Profile Data Success': props<{ userProfileData: UserProfileData }>(),
    'Load Profile Data Failure': props<{ errorMessage: string }>(),
  },
})
