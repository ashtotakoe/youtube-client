import { createActionGroup, props } from '@ngrx/store'

export const videosPageActions = createActionGroup({
  source: 'Search Page',
  events: {
    'Load Videos By Query': props<{ query: string }>(),
  },
})
