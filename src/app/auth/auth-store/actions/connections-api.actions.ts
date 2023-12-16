import { createActionGroup, emptyProps, props } from '@ngrx/store'

export const connectionsApiActions = createActionGroup({
  source: 'Connections Api',
  events: {
    'Sign Up Success': emptyProps(),
    'Sign Up Failure': props<{ errorMessage: string }>(),

    'Sign In Success': emptyProps(),
    'Sign In Failure': props<{ errorMessage: string }>(),
  },
})
