import type { SearchItem } from '../../shared/models/search-item.model'

export type SortFunc = (searchItems: SearchItem[], prompt?: string) => SearchItem[]
