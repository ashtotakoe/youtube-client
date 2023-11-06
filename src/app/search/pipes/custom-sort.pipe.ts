import { Pipe, type PipeTransform } from '@angular/core'

import type { SearchItem } from '../../shared/models/search-item.model'
import type { SortData } from '../../shared/models/sort-data.model'
import { sortDirectionOptions } from '../consts/sort-direction-options.const'
import type { SortFunction } from '../types/sort-function.type'

const sortStrategies: Record<SortData['type'], SortFunction> = {
  views: (a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount),

  date: (a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt),

  title: (a, b) => a.snippet.title.localeCompare(b.snippet.title, undefined, { sensitivity: 'base' }),
}

@Pipe({
  name: 'sort',
})
export class CustomSortPipe implements PipeTransform {
  public transform(data: [SearchItem[] | null, SortData | null] | null): SearchItem[] | null {
    if (!data) {
      return null
    }

    const [videos, sortData] = data

    if (!videos) {
      return null
    }

    if (!sortData) {
      return videos.length === 0 ? null : videos
    }

    return Array.from(videos).sort(
      (a, b) => sortStrategies[sortData.type](a, b) * sortDirectionOptions[sortData.direction],
    )
  }
}
