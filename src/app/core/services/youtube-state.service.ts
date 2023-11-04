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

  public responseData$ = this.response$$.asObservable()

  private search$$ = new BehaviorSubject<string>('')

  public searchPrompt$ = this.search$$.asObservable()

  private setCurrentSearchPrompt(value: string): void {
    this.search$$.next(value)
  }

  private addResponseData(data: Observable<SearchResponse | null>): void {
    data.subscribe(response => {
      this.response$$.next(response)
    })
  }

  public sendRequest(searchingPrompt: string): void {
    this.setCurrentSearchPrompt(searchingPrompt)
    this.addResponseData(this.http.fetchData())
  }

  public getVideoById(id: string): Observable<SearchItem | null> {
    return this.http.fetchData().pipe(
      map(response => response?.items.find(item => item.id === id)),
      map(item => (item === undefined ? null : item)),
      catchError(() => of(null)),
    )
  }
}
