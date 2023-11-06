import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { SearchItem } from '../../../shared/models/search-item.model'

@Component({
  selector: 'yt-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoComponent {
  @Input() public videoCardData?: SearchItem
}
