import { Injectable } from '@angular/core'
import { BehaviorSubject, type Observable } from 'rxjs'

import type { SearchResponse } from '../../shared/models/ search-response.model'

@Injectable({
  providedIn: 'root',
})
export class YoutubeStateService {
  private response$ = new BehaviorSubject<SearchResponse | null>(null)

  public responseData$$ = this.response$.asObservable()

  private searchPrompt$$ = new BehaviorSubject<string>('')

  public getSearchPrompt(): Observable<string> {
    return this.searchPrompt$$.asObservable()
  }

  public setCurrentSearchPrompt(value: string): void {
    this.searchPrompt$$.next(value)
  }

  public addResponseData(data: Observable<SearchResponse>): void {
    data.subscribe(response => {
      this.response$.next(response)
    })
  }
}
