import type { VideoData } from '../../shared/models/video-data.model'

export interface VideosState {
  searchVideos: VideoData[]
  createdVideos: VideoData[]
  favoriteVideos: VideoData[]
  videoDetails: VideoData | null
  isLoading: boolean
  errorMessage: string | null
}
