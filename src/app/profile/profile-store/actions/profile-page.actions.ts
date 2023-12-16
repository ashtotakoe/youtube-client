import { createActionGroup, emptyProps } from '@ngrx/store'

export const profilePageActions = createActionGroup({
  source: 'Profile Page',
  events: {
    'Load Profile Data': emptyProps(),
  },
})
