import { createActionGroup, props } from '@ngrx/store'

export const conversationPageActions = createActionGroup({
  source: 'Conversation Page',
  events: {
    'Load Conversation Chat': props<{ conversationId: string; isRefresh?: boolean }>(),
    'Send Message To Conversation': props<{ conversationId: string; message: string }>(),
    'Delete Conversation': props<{ conversationId: string }>(),
  },
})
