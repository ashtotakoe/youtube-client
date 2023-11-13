import { Injectable } from '@angular/core'

import { YoutubeResponseService } from '../../services/youtube-response.service'

@Injectable()
export class SearchRequestService {
  constructor(
    private youtubeState: YoutubeResponseService,
    private youtubeResponseService: YoutubeResponseService,
  ) {}

  public sendRequestByQuery(query: string): void {
    this.youtubeResponseService.getVideosByQuery(query)
  }
}
