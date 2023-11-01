import { Pipe, type PipeTransform } from '@angular/core'

import type { SearchItem } from '../../shared/models/search-item.model'
import type { SortFormData } from '../../shared/models/sort-form-data.model'

@Pipe({
  name: 'customSort',
})
export class CustomSortPipe implements PipeTransform {
  private sortStrategies: Record<string, Func> = {
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

      const res: SearchItem[] = []

      Array.from(Array(prompt.length)).forEach((_, index) => {
        const tempPrompt = prompt.slice(0, prompt.length - index)

        if (tempPrompt.length < 3) {
          return
        }

        res.push(...searchItems.filter(elem => elem.snippet.title.toLowerCase().includes(tempPrompt)))
      })

      return Array.from(new Set(res))
    },
  }

  public transform(value: [SearchItem[] | null, SortFormData | null] | null): SearchItem[] {
    if (!value) {
      return []
    }

    const [searchItems, sortFormData] = value

    if (!searchItems) {
      return []
    }

    if (!sortFormData) {
      return searchItems
    }

    const sortedSearchItems = this.sortStrategies[sortFormData.sortType as string](
      searchItems,
      sortFormData.sortType === 'title' ? sortFormData.sortingPrompt : undefined,
    )

    if (sortFormData.sortOrder === 'descending') {
      return sortedSearchItems.reverse()
    }

    return sortedSearchItems
  }
}

type Func = (searchItems: SearchItem[], prompt?: string) => SearchItem[]
