import { Injectable } from '@angular/core'
import { map, withLatestFrom } from 'rxjs'

import { YoutubeStateService } from '../../core/services/youtube-state.service'

@Injectable()
export class SearchItemsService {
  public videos$ = this.youtubeState.response$.pipe(
    withLatestFrom(this.youtubeState.searchPrompt$),
    map(([videos, searchPrompt]) => {
      if (!videos) {
        return []
      }

      return videos.items.filter(item => item.snippet.title.toLowerCase().includes(searchPrompt))
    }),
  )

  constructor(private youtubeState: YoutubeStateService) {}
}
