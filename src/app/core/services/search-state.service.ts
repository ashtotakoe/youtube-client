import { Injectable } from '@angular/core'

import type { SearchData } from '../../shared/models/search-data.model'

@Injectable({
  providedIn: 'root',
})
export class SearchStateService {
  private searchState: SearchData = {
    query: '',
    pageToken: '',
    isFirstPage: false,
  }

  public setSearchState({ query, pageToken, isFirstPage }: Partial<SearchData>): SearchData {
    const searchState = {
      ...this.searchState,
    }

    if (query) {
      Object.assign(searchState, { query, pageToken: '', isFirstPage: true })
    }

    if (pageToken) {
      Object.assign(searchState, { pageToken, isFirstPage: isFirstPage ?? false })
    }

    this.searchState = searchState

    return this.searchState
  }
}
