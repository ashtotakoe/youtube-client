import { createActionGroup, props } from '@ngrx/store'

import type { UserSignUpData } from 'src/app/shared/models/user-sign-up-data.model'

export const signUpPageActions = createActionGroup({
  source: 'Sign Up Page',
  events: {
    'Sign Up': props<{ userSignInData: UserSignUpData }>(),
  },
})
