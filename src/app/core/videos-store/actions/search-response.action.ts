import { createAction, props } from '@ngrx/store'

import type { SearchItem } from '../../../shared/models/video-data.model'
import type { YoutubeResponse } from '../../../shared/models/youtube-response.model'

export const updateSearchResponse = createAction(
  '[Youtube API] Update Search Response',
  props<{ response: YoutubeResponse<SearchItem> }>(),
)
