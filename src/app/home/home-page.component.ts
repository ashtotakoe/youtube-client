import { ChangeDetectionStrategy, Component } from '@angular/core'

import { CountdownService } from '../shared/services/countdown.service'

@Component({
  selector: 'cn-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  constructor(private countdownService: CountdownService) {}

  public onClick(): void {
    this.countdownService.startCountdown()
  }
}
