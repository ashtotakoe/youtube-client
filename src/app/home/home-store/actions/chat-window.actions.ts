import { createActionGroup, props } from '@ngrx/store'

export const chatWindowActions = createActionGroup({
  source: 'Chat Window',
  events: {
    'Send Message': props<{ groupId: string; message: string }>(),
  },
})
