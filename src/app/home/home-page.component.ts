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
  public test(): void {
    console.log('test')
  }

  public startCountdown(): void {
    this.countdownService.startCountdown()
  }
}
