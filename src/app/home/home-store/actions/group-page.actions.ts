import { createActionGroup, props } from '@ngrx/store'

export const groupPageActions = createActionGroup({
  source: 'Group Page',
  events: {
    'Load Group Chat': props<{ groupId: string; since?: string }>(),
  },
})
