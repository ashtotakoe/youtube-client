import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { SearchItem } from '../../../shared/models/search-item.model'

@Component({
  selector: 'yt-search-item',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoCardComponent {
  @Input() public videoCardData?: SearchItem
}
