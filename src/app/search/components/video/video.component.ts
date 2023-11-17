import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core'

import { SearchItem } from '../../../shared/models/search-item.model'

@Component({
  selector: 'yt-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoComponent implements OnInit {
  @Input() public video!: SearchItem
  public videoId!: string

  public ngOnInit(): void {
    this.videoId = typeof this.video.id === 'string' ? this.video.id : this.video.id.videoId
  }
}
