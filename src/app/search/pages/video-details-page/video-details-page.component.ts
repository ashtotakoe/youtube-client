import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ActivatedRoute, type Data } from '@angular/router'
import { map, type Observable } from 'rxjs'

import { YoutubeResponseService } from '../../../core/services/youtube-response.service'
import type { SearchItem } from '../../../shared/models/search-item.model'

@Component({
  selector: 'yt-video-details-page',
  templateUrl: './video-details-page.component.html',
  styleUrls: ['./video-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoDetailsPageComponent {
  public videoDetails$: Observable<SearchItem | null> = this.route.data.pipe(
    map((data: Data) => data['details'] as SearchItem | null),
  )

  constructor(private route: ActivatedRoute) {}
}
