import { createActionGroup, props } from '@ngrx/store'

export const groupPageActions = createActionGroup({
  source: 'Group Page',
  events: {
    'Load Group Chat': props<{ groupId: string; isRefresh?: boolean }>(),
    'Send Message To Group': props<{ groupId: string; message: string }>(),
  },
})
