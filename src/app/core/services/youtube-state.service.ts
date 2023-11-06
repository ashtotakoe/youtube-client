import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, map, type Observable, of } from 'rxjs'

import type { SearchResponse } from '../../shared/models/ search-response.model'
import type { SearchItem } from '../../shared/models/search-item.model'
import { YoutubeHttpService } from './youtube-http.service'

@Injectable({
  providedIn: 'root',
})
export class YoutubeStateService {
  constructor(private http: YoutubeHttpService) {}

  private response$$ = new BehaviorSubject<SearchResponse | null>(null)

  public response$ = this.response$$.asObservable()

  private searchPrompt$$ = new BehaviorSubject<string>('')

  public searchPrompt$ = this.searchPrompt$$.asObservable()

  private setSearchPrompt(value: string): void {
    this.searchPrompt$$.next(value)
  }

  private addVideos(data: Observable<SearchResponse | null>): void {
    data.subscribe(response => {
      this.response$$.next(response)
    })
  }

  public sendSearchRequest(searchPrompt: string): void {
    this.setSearchPrompt(searchPrompt)
    this.addVideos(this.http.getVideos())
  }

  public getVideoById(id: string): Observable<SearchItem | null> {
    return this.http.getVideos().pipe(
      map(response => response?.items.find(item => item.id === id)),
      map(item => (item === undefined ? null : item)),
      catchError(() => of(null)),
    )
  }
}
