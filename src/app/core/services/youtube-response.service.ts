import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, type Observable, of, switchMap } from 'rxjs'

import type { YoutubeResponse } from '../../shared/models/youtube-response.model'
import { YoutubeHttpService } from '../youtube/services/youtube-http.service'

@Injectable({
  providedIn: 'root',
})
export class YoutubeResponseService {
  constructor(private youtubeHttpService: YoutubeHttpService) {}

  private searchResponse$$ = new BehaviorSubject<YoutubeResponse | null>(null)

  public searchResponse$ = this.searchResponse$$.asObservable()

  public getVideosByQuery(query: string): void {
    this.youtubeHttpService
      .getSearchResponseByQuery(query)
      .pipe(
        switchMap(response => {
          const videIds = response.items.map(({ id }) => (typeof id === 'string' ? id : id.videoId))

          return this.youtubeHttpService.getVideosById(videIds.join(','))
        }),
        catchError(({ message }: Error) => {
          console.warn(message)

          return of(null)
        }),
      )
      .subscribe(response => {
        this.searchResponse$$.next(response)
      })
  }

  public getVideoById(id: string): Observable<YoutubeResponse | null> {
    return this.youtubeHttpService.getVideosById(id).pipe(
      catchError(({ message }: Error) => {
        console.warn(message)

        return of(null)
      }),
    )
  }
}
