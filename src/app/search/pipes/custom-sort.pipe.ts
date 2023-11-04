import { Pipe, type PipeTransform } from '@angular/core'

import type { SearchItem } from '../../shared/models/search-item.model'
import type { SortFormData } from '../../shared/models/sort-form-data.model'
import { sortStrategies } from '../consts/sort-strategies'

@Pipe({
  name: 'customSort',
})
export class CustomSortPipe implements PipeTransform {
  public transform(value: [SearchItem[] | null, SortFormData | null] | null): SearchItem[] | null {
    if (!value) {
      return null
    }

    const [searchItems, sortFormData] = value

    if (!searchItems) {
      return null
    }

    if (!sortFormData) {
      return searchItems.length === 0 ? null : searchItems
    }

    const sortedSearchItems = sortStrategies[sortFormData.sortType as string](
      Array.from(searchItems),
      sortFormData.sortType === 'title' ? sortFormData.sortingPrompt : undefined,
    )

    if (sortFormData.sortOrder === 'descending') {
      return sortedSearchItems.reverse()
    }

    return sortedSearchItems
  }
}
