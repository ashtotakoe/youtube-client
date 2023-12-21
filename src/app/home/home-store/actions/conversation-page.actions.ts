import { createActionGroup, props } from '@ngrx/store'

export const conversationPageActions = createActionGroup({
  source: 'Conversation Page',
  events: {
    'Load Conversation Chat': props<{ conversationId: string; isRefresh: boolean }>(),
  },
})
