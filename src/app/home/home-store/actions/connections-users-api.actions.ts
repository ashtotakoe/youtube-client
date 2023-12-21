import { createActionGroup, props } from '@ngrx/store'

import type { User } from '../../models/user.model'

export const connectionsUsersApiActions = createActionGroup({
  source: 'Connections API Users',
  events: {
    'Load Users Success': props<{ users: User[] }>(),
    'Load Users Failure': props<{ errorMessage: string }>(),

    'Create Conversation Success': props<{ conversationId: string; partnerId: string }>(),
    'Create Conversation Failure': props<{ errorMessage: string }>(),

    'Load Conversation Chat Success': props<{ user: User }>(),
    'Load Conversation Chat Failure': props<{ errorMessage: string }>(),
  },
})
