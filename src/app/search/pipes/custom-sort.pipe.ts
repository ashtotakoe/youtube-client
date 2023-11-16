import { Pipe, type PipeTransform } from '@angular/core'

import type { SearchItem } from '../../shared/models/search-item.model'
import { sortDirectionOptions } from '../consts/sort-direction-options.const'
import { sortStrategies } from '../consts/sort-strategies'
import type { VideosAndSortData } from '../models/videos-and-sort-data.model'

@Pipe({
  name: 'sort',
})
export class CustomSortPipe implements PipeTransform {
  public transform(data: VideosAndSortData): SearchItem[] {
    if (!data) {
      return []
    }

    const { videos, sortData } = data

    if (!videos) {
      return []
    }

    if (!sortData) {
      return videos.length === 0 ? [] : videos
    }

    return Array.from(videos).sort(
      (a, b) => sortStrategies[sortData.type](a, b) * sortDirectionOptions[sortData.direction],
    )
  }
}
