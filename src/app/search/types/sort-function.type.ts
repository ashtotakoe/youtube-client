import type { SearchItem } from '../../shared/models/search-item.model'

export type SortFunction = (a: SearchItem, b: SearchItem) => number
