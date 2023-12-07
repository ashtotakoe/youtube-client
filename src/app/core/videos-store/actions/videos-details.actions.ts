import { createActionGroup, props } from '@ngrx/store'

export const videoDetailsActions = createActionGroup({
  source: 'Video Details',
  events: {
    'Load Video By Id': props<{ id: string }>(),
  },
})
