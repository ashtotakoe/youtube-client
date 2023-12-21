import { createActionGroup, emptyProps, props } from '@ngrx/store'

import type { Group } from '../../models/group.model'

export const connectionsGroupsApiActions = createActionGroup({
  source: 'Connections Groups API',

  events: {
    'Load Groups Success': props<{ groups: Group[] }>(),
    'Load Groups Failure': props<{ errorMessage: string }>(),

    'Create Group Success': props<{ group: Group }>(),
    'Create Group Failure': props<{ errorMessage: string }>(),

    'Delete Group Success': props<{ groupId: string }>(),
    'Delete Group Failure': props<{ errorMessage: string }>(),

    'Load Group Chat Success': props<{ group: Group }>(),
    'Load Group Chat Failure': props<{ errorMessage: string }>(),

    'Send Message Success': emptyProps(),
    'Send Message Failure': props<{ errorMessage: string }>(),
  },
})
