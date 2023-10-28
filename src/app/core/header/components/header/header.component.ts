import { ChangeDetectionStrategy, Component, type OnDestroy } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'yt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
