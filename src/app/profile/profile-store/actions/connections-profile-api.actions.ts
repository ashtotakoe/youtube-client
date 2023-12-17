import { createActionGroup, emptyProps, props } from '@ngrx/store'

import type { ProfileData } from '../../models/user-profile-data.model'

export const connectionsProfileApiActions = createActionGroup({
  source: 'Connections Profile API',
  events: {
    'Load Profile Data Success': props<{ profileData: ProfileData }>(),
    'Load Profile Data Failure': props<{ errorMessage: string }>(),

    'Change User Name Success': props<{ name: string }>(),
    'Change User Name Failure': props<{ errorMessage: string }>(),

    'Log Out Success': emptyProps(),
    'Log Out Failure': props<{ errorMessage: string }>(),
  },
})
