import { Injectable } from '@angular/core'
import { BehaviorSubject, map, type Observable } from 'rxjs'

import type { SearchItem } from '../../../shared/models/video-data.model'
import type { PageData, YoutubeResponse } from '../../../shared/models/youtube-response.model'

@Injectable({
  providedIn: 'root',
})
export class YoutubeResponseStateService {
  private response$$ = new BehaviorSubject<YoutubeResponse<SearchItem> | null>(null)

  public response$ = this.response$$.asObservable()

  public pageData$: Observable<PageData> = this.response$.pipe(
    map(response => ({
      nextPageToken: response?.nextPageToken,
      prevPageToken: response?.prevPageToken,
      pageInfo: response?.pageInfo,
    })),
  )

  public setResponse(response: YoutubeResponse<SearchItem>): void {
    this.response$$.next(response)
  }
}
