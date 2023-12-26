import { Injectable } from '@angular/core'

import type { SearchData } from '../../shared/models/search-data.model'

@Injectable({
  providedIn: 'root',
})
export class SearchStateService {
  private searchData: SearchData = {
    query: '',
    pageToken: '',
    isFirstPage: false,
  }

  public updateSearchState({ query, pageToken, isFirstPage }: Partial<SearchData>): SearchData {
    const searchState = {
      ...this.searchData,
    }

    if (query) {
      Object.assign(searchState, { query, pageToken: '', isFirstPage: true })
    }

    if (pageToken) {
      Object.assign(searchState, { pageToken, isFirstPage: isFirstPage ?? false })
    }

    this.searchData = searchState

    return this.searchData
  }
}
