import { createActionGroup, props } from '@ngrx/store'

import type { VideoData } from '../../../shared/models/video-data.model'

export const youtubeApiActions = createActionGroup({
  source: 'Youtube API',

  events: {
    'Load Videos By Query Success': props<{ videos: VideoData[] }>(),
    'Load Videos By Query Failure': props<{ errorMessage: string }>(),

    'Load Video By Id Success': props<{ video: VideoData }>(),
    'Load Video By Id Failure': props<{ errorMessage: string }>(),
  },
})
