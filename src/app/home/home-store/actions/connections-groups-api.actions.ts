import { createActionGroup, props } from '@ngrx/store'

import type { Group } from '../../models/group.model'

export const connectionsGroupsApiActions = createActionGroup({
  source: 'Connections Groups API',

  events: {
    'Load Groups Success': props<{ groups: Group[] }>(),
    'Load Groups Failure': props<{ errorMessage: string }>(),
  },
})
