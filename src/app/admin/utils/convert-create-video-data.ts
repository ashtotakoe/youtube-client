import type { Thumbnails } from '../../shared/models/thumbnails.model'
import type { VideoData } from '../../shared/models/video-data.model'
import { defaultStatistics } from '../consts/default-statistics.const'
import { thumbnailTypes } from '../consts/thumbnail-types.const'
import type { CreateVideoData } from '../models/create-video-form-data.model'
import { generateRandomId } from './generate-random-id'

export const convertCreateVideoData = ({
  creationDate,
  description,
  title,
  imageCoverLink,
  tags,
}: CreateVideoData): VideoData => {
  const thumbnails = thumbnailTypes.reduce(
    (acc, type) => ({
      ...acc,
      [type]: {
        url: imageCoverLink,
        width: 0,
        height: 0,
      },
    }),
    {},
  )

  return {
    isCustomCreated: true,
    id: generateRandomId(),
    statistics: defaultStatistics,
    snippet: {
      publishedAt: creationDate?.toISOString() ?? new Date().toISOString(),
      channelId: '',
      title,
      description,
      thumbnails: thumbnails as Thumbnails,
      channelTittle: '',
      tags,
      categoryId: '',
      liveBroadcastContent: '',
      localized: {
        title: '',
        description: '',
      },
      defaultAudioLanguage: '',
    },
  }
}
