import { createActionGroup, props } from '@ngrx/store'

export const groupsListActions = createActionGroup({
  source: 'Groups List Component',
  events: {
    'Load Groups': props<{ isCashed: boolean }>(),
    'Delete Group': props<{ groupId: string }>(),
  },
})
