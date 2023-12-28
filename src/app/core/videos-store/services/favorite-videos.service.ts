import { Injectable } from '@angular/core'
import { map, type Observable } from 'rxjs'

import { VideosFacade } from './videos.facade'

@Injectable({
  providedIn: 'root',
})
export class FavoriteVideosService {
  constructor(private videosFacade: VideosFacade) {}

  public isVideoFavorite$(videoId: string): Observable<boolean> {
    return this.videosFacade.favoriteVideos$.pipe(
      map(favoriteVideos => favoriteVideos.some(video => video.id === videoId)),
    )
  }
}
