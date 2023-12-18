import { createActionGroup, props } from '@ngrx/store'

export const createGroupFormActions = createActionGroup({
  source: 'Create Group Form',
  events: {
    'Create New Group': props<{ newGroupName: string }>(),
  },
})
