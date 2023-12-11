import type { SearchItem, VideoData } from '../../shared/models/video-data.model'
import type { YoutubeResponse } from '../../shared/models/youtube-response.model'

export interface VideosState {
  searchVideos: VideoData[]
  createdVideos: VideoData[]
  favoriteVideos: VideoData[]
  videoDetails: VideoData | null
  isLoading: boolean
  errorMessage: string | null
  searchResponse: YoutubeResponse<SearchItem> | null
}
