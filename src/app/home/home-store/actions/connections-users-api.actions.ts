import { createActionGroup, props } from '@ngrx/store'

import type { User } from '../../models/user.model'

export const connectionsUsersApiActions = createActionGroup({
  source: 'Connections API Users',
  events: {
    'Load Users Success': props<{ users: User[] }>(),
    'Load Users Failure': props<{ errorMessage: string }>(),
  },
})
