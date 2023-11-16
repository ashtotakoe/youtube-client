import { Injectable } from '@angular/core'
import { map, withLatestFrom } from 'rxjs'

import { YoutubeStateService } from '../../core/services/youtube-state.service'

@Injectable()
export class SearchItemsService {
  public relevantItems$ = this.youtubeState.responseData$.pipe(
    withLatestFrom(this.youtubeState.searchPrompt$),
    map(([response, searchPrompt]) => {
      if (response) {
        return response.items.filter(item => item.snippet.title.toLowerCase().includes(searchPrompt))
      }

      return null
    }),
  )

  constructor(private youtubeState: YoutubeStateService) {}
}
