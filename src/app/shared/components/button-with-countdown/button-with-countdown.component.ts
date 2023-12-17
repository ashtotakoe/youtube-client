import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'

import { CountdownService } from '../../services/countdown.service'

@Component({
  selector: 'cn-button-with-countdown',
  templateUrl: './button-with-countdown.component.html',
  styleUrls: ['./button-with-countdown.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonWithCountdownComponent {
  @Output() public buttonClicked = new EventEmitter<void>()

  public countdown$ = this.countdownService.countdown$

  constructor(private countdownService: CountdownService) {}

  public onClick(): void {
    this.buttonClicked.emit()
  }
}
