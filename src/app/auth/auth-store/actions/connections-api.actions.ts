import { createActionGroup, props } from '@ngrx/store'

import type { UserRegistrationData } from 'src/app/shared/models/user-data.model'

export const connectionsApiActions = createActionGroup({
  source: 'Connections Api',
  events: {
    'Sign Up Success': props<{ userRegistrationData: UserRegistrationData }>(),
    'Sign Up Failure': props<{ errorMessage: string }>(),
  },
})
