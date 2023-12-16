import { createActionGroup, props } from '@ngrx/store'

import type { UserData } from 'src/app/shared/models/user-data.model'

export const signUpPageActions = createActionGroup({
  source: 'Sign Up Page',
  events: {
    'Sign Up': props<{ userData: UserData }>(),
  },
})
