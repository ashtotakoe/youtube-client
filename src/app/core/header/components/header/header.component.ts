import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'yt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public initSearch(request: string): void {
    console.log(request)
  }
}
