import { Injectable } from '@angular/core'

import { YoutubeHttpService } from '../../services/youtube-http.service'
import { YoutubeStateService } from '../../services/youtube-state.service'

@Injectable()
export class SearchRequestService {
  constructor(
    private http: YoutubeHttpService,
    private youtubeState: YoutubeStateService,
  ) {}

  public sendRequest(searchingPrompt: string): void {
    this.youtubeState.setCurrentSearchPrompt(searchingPrompt)
    this.youtubeState.addResponseData(this.http.fetchData())
  }
}
