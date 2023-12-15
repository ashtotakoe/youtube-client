import { createActionGroup, props } from '@ngrx/store'

import type { UserLoginData } from 'src/app/shared/types/user-login-data.type'

export const signInPageActions = createActionGroup({
  source: 'Sign In Page',
  events: {
    'Sign In': props<{ userLoginData: UserLoginData }>(),
  },
})
