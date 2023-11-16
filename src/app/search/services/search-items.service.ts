import { Injectable } from '@angular/core'
import { map, withLatestFrom } from 'rxjs'

import { YoutubeResponseService } from '../../core/services/youtube-response.service'

@Injectable()
export class SearchItemsService {
  public videos$ = this.youtubeState.response$.pipe(
    withLatestFrom(this.youtubeState.searchPrompt$),
    map(([videos, searchPrompt]) => {
      if (videos) {
        return videos.items.filter(item => item.snippet.title.toLowerCase().includes(searchPrompt))
      }

      return []
    }),
  )

  constructor(private youtubeState: YoutubeResponseService) {}
}
