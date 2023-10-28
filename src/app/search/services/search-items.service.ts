import { Injectable } from '@angular/core'
import { map, type Observable, withLatestFrom } from 'rxjs'

import { YoutubeStateService } from '../../core/services/youtube-state.service'
import type { SearchItem } from '../../shared/models/search-item.model'

@Injectable()
export class SearchItemsService {
  public relevantItems$: Observable<SearchItem[] | null> = this.youtubeState.responseData$$.pipe(
    withLatestFrom(this.youtubeState.getSearchPrompt()),
    map(([response, searchPrompt]) => {
      if (response) {
        return response.items.filter(item => item.snippet.title.includes(searchPrompt))
      }

      return null
    }),
  )

  constructor(private youtubeState: YoutubeStateService) {}
}
