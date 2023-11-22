import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'yt-create-video-page',
  templateUrl: './create-video-page.component.html',
  styleUrls: ['./create-video-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateVideoPageComponent {}
