import { createActionGroup, props } from '@ngrx/store'

import type { SearchData } from '../../../shared/models/search-data.model'

export const videoDetailsActions = createActionGroup({
  source: 'Video Details',
  events: {
    'Load Video By Id': props<{ id: string }>(),

    'Load Videos Via Search': props<{ searchData: SearchData }>(),
  },
})
