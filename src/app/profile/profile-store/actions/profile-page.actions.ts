import { createActionGroup, emptyProps, props } from '@ngrx/store'

export const profilePageActions = createActionGroup({
  source: 'Profile Page',
  events: {
    'Load Profile Data': emptyProps(),
    'Change User Name': props<{ name: string }>(),
    'Log Out': emptyProps(),
  },
})
