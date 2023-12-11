import { createActionGroup, props } from '@ngrx/store'

import type { SearchData } from '../../../shared/models/search-data.model'

export const videosPageActions = createActionGroup({
  source: 'Search Page',
  events: {
    'Load Videos Via Search': props<{ searchData: SearchData }>(),
  },
})
