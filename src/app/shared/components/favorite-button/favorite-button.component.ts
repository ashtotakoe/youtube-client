import { CommonModule } from '@angular/common'
import { Component, Input, type OnInit } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import type { Observable } from 'rxjs'

import { FavoriteVideosService } from '../../../core/videos-store/services/favorite-videos.service'
import { VideosFacade } from '../../../core/videos-store/services/videos.facade'
import { VideoData } from '../../models/video-data.model'

@Component({
  selector: 'yt-favorite-button',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss'],
})
export class FavoriteButtonComponent implements OnInit {
  @Input() public videoData!: VideoData

  public isVideoFavorite$!: Observable<boolean>
  constructor(
    private favoriteVideosService: FavoriteVideosService,
    private videosFacade: VideosFacade,
  ) {}

  public ngOnInit(): void {
    this.isVideoFavorite$ = this.favoriteVideosService.isVideoFavorite$(this.videoData.id)
  }

  public onClick(isVideoFavorite: boolean): void {
    if (isVideoFavorite) {
      this.videosFacade.removeFavoriteVideo(this.videoData)

      return
    }

    this.videosFacade.addFavoriteVideo(this.videoData)
  }
}
