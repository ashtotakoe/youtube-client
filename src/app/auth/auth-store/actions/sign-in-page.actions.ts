import { createActionGroup, props } from '@ngrx/store'

import type { UserSignInData } from 'src/app/shared/types/user-sign-in-data.type'

export const signInPageActions = createActionGroup({
  source: 'Sign In Page',
  events: {
    'Sign In': props<{ userSignInData: UserSignInData }>(),
  },
})
