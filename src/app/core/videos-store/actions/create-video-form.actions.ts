import { createAction, props } from '@ngrx/store'

import type { VideoData } from '../../../shared/models/video-data.model'

export const createVideoAction = createAction('Create Video Form', props<{ createdVideo: VideoData }>())
