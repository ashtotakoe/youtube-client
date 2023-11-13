import { Injectable } from '@angular/core'
import { map, type Observable } from 'rxjs'

import { YoutubeResponseService } from '../../core/services/youtube-response.service'
import type { SearchItem } from '../../shared/models/search-item.model'

@Injectable({
  providedIn: 'root',
})
export class SearchItemsService {
  public videos$ = this.youtubeResponseService.searchResponse$.pipe(map(response => response?.items ?? []))

  constructor(private youtubeResponseService: YoutubeResponseService) {}

  public getVideoById(id: string): Observable<SearchItem | null> {
    return this.youtubeResponseService.getVideoById(id).pipe(map(response => response?.items[0] ?? null))
  }
}
