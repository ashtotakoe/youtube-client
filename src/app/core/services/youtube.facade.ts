import { Injectable } from '@angular/core'
import { map, type Observable } from 'rxjs'

import type { SearchItem } from '../../shared/models/search-item.model'
import type { SortData } from '../../shared/models/sort-data.model'
import { SortStateService } from './sort-state.service'
import { YoutubeResponseService } from './youtube-response.service'

@Injectable({
  providedIn: 'root',
})
export class YoutubeFacade {
  public videos$ = this.youtubeResponseService.searchResponse$.pipe(map(response => response?.items ?? []))
  public sortState$ = this.sortStateService.sortState$

  constructor(
    private youtubeResponseService: YoutubeResponseService,
    private sortStateService: SortStateService,
  ) {}

  public sendRequestByQuery(query: string): void {
    this.youtubeResponseService.getVideosByQuery(query)
  }

  public getVideoById(id: string): Observable<SearchItem | null> {
    return this.youtubeResponseService.getVideoById(id).pipe(map(response => response?.items.pop() ?? null))
  }

  public changeSortState(sortData: SortData | null): void {
    this.sortStateService.changeSortState(sortData)
  }
}
