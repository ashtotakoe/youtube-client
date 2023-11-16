import type { SortData } from '../../shared/models/sort-data.model'
import type { SortFunction } from '../types/sort-function.type'

export const sortStrategies: Record<SortData['type'], SortFunction> = {
  views: (a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount),

  date: (a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt),

  title: (a, b) => a.snippet.title.localeCompare(b.snippet.title, undefined, { sensitivity: 'base' }),
}
