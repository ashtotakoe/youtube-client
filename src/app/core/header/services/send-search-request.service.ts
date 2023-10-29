import { Injectable } from '@angular/core'

import { YoutubeStateService } from '../../services/youtube-state.service'

@Injectable()
export class SearchRequestService {
  constructor(private youtubeState: YoutubeStateService) {}

  public sendRequest(searchingPrompt: string): void {
    this.youtubeState.sendRequest(searchingPrompt)
  }
}
