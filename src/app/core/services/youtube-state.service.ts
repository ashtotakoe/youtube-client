import { Injectable } from '@angular/core'
import { BehaviorSubject, type Observable } from 'rxjs'

import type { SearchResponse } from '../../shared/models/ search-response.model'
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

  private addResponseData(data: Observable<SearchResponse>): void {
    data.subscribe(response => {
      this.response$$.next(response)
    })
  }

  public sendRequest(searchingPrompt: string): void {
    this.setCurrentSearchPrompt(searchingPrompt)
    this.addResponseData(this.http.fetchData())
  }
}
