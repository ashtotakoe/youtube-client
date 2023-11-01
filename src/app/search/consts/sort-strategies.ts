import type { SearchItem } from '../../shared/models/search-item.model'
import type { SortFunc } from '../types/sort-function.type'
import { calculateStringsSimilarityRate } from '../utils/calculate-similarity-rate'

export const sortStrategies: Record<string, SortFunc> = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'views count': (searchItems: SearchItem[]): SearchItem[] => {
    return searchItems.sort((item1, item2) => Number(item1.statistics.viewCount) - Number(item2.statistics.viewCount))
  },

  date: (searchItems: SearchItem[]): SearchItem[] => {
    return searchItems.sort(
      (item1, item2) => new Date(item1.snippet.publishedAt).getTime() - new Date(item2.snippet.publishedAt).getTime(),
    )
  },

  title: (searchItems: SearchItem[], prompt?: string): SearchItem[] => {
    if (!prompt) {
      return searchItems
    }

    return searchItems.sort(
      (item1, item2) =>
        calculateStringsSimilarityRate(item1.snippet.title, prompt) -
        calculateStringsSimilarityRate(item2.snippet.title, prompt),
    )
  },
}
