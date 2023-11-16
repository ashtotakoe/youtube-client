import { Injectable } from '@angular/core'

import { YoutubeResponseService } from '../../services/youtube-response.service'

@Injectable()
export class SearchRequestService {
  constructor(private youtubeState: YoutubeResponseService) {}

  public sendSearchRequest(searchingPrompt: string): void {
    this.youtubeState.sendSearchRequestByQuery(searchingPrompt)
  }
}
