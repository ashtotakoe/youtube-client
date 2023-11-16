import { Pipe, type PipeTransform } from '@angular/core'

import type { SearchItem } from '../../shared/models/search-item.model'
import type { SortData } from '../../shared/models/sort-data.model'
import { sortDirectionOptions } from '../consts/sort-direction-options.const'
import { sortStrategies } from '../consts/sort-strategies'

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
