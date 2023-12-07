import { createActionGroup, props } from '@ngrx/store'

import type { VideoData } from '../../../shared/models/video-data.model'

export const favoriteVideosActions = createActionGroup({
  source: 'Favorite Videos',
  events: {
    'Add To Favorite Videos': props<{ videoData: VideoData }>(),
    'Remove From Favorite Videos': props<{ videoData: VideoData }>(),
  },
})
