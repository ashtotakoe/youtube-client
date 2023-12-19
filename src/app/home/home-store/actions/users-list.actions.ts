import { createActionGroup, props } from '@ngrx/store'

export const usersListActions = createActionGroup({
  source: 'Users List Component',
  events: {
    'Load Users': props<{ isCashed: boolean }>(),
  },
})
