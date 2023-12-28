import { createActionGroup, props } from '@ngrx/store'

import type { VideoData } from '../../../shared/models/video-data.model'

export const favoriteButtonActions = createActionGroup({
  source: 'Favorite Button',
  events: {
    'Toggle favorite video': props<{ video: VideoData }>(),
  },
})
