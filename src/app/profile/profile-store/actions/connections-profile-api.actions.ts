import { createActionGroup, props } from '@ngrx/store'

import type { ProfileData } from '../../models/user-profile-data.model'

export const connectionsProfileApiActions = createActionGroup({
  source: 'Connections Profile API',
  events: {
    'Load Profile Data Success': props<{ profileData: ProfileData }>(),
    'Load Profile Data Failure': props<{ errorMessage: string }>(),
  },
})
