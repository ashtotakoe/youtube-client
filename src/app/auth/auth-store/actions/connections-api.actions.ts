import { createActionGroup, props } from '@ngrx/store'

import type { UserData } from 'src/app/shared/models/user-data.model'

export const connectionsApiActions = createActionGroup({
  source: 'Connections Api',
  events: {
    'Sign Up Success': props<{ userData: UserData }>(),
    'Sign Up Failure': props<{ errorMessage: string }>(),
  },
})
