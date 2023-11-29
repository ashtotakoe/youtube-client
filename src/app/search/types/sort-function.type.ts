import type { VideoData } from '../../shared/models/video-data.model'

export type SortFunction = (a: VideoData, b: VideoData) => number
