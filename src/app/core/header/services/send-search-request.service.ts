import { Injectable } from '@angular/core'

import { YoutubeStateService } from '../../services/youtube-state.service'

@Injectable()
export class SearchRequestService {
  constructor(private youtubeState: YoutubeStateService) {}

  public sendSearchRequest(searchingPrompt: string): void {
    this.youtubeState.sendSearchRequest(searchingPrompt)
  }
}
