import { Injectable } from '@angular/core'
import { BehaviorSubject, map, type Observable } from 'rxjs'

import type { SearchResponse } from '../../shared/models/ search-response.model'
import type { SearchItem } from '../../shared/models/search-item.model'
import { YoutubeHttpService } from './youtube-http.service'

@Injectable({
  providedIn: 'root',
})
export class YoutubeResponseService {
  constructor(private youtubeHttpService: YoutubeHttpService) {}

  private response$$ = new BehaviorSubject<SearchResponse | null>(null)

  public response$ = this.response$$.asObservable()

  private searchPrompt$$ = new BehaviorSubject<string>('')

  public searchPrompt$ = this.searchPrompt$$.asObservable()

  private changeSearchPrompt(value: string): void {
    this.searchPrompt$$.next(value)
  }

  private changeResponse(data: Observable<SearchResponse | null>): void {
    data.subscribe(response => {
      this.response$$.next(response)
    })
  }

  public sendSearchRequestByQuery(searchPrompt: string): void {
    this.changeSearchPrompt(searchPrompt)
    this.changeResponse(this.youtubeHttpService.getVideos())
  }

  public getVideoById(id: string): Observable<SearchItem | null> {
    return this.youtubeHttpService.getVideos().pipe(
      map(response => {
        const foundItem = response?.items.find(item => item.id === id)

        return foundItem ?? null
      }),
    )
  }
}
