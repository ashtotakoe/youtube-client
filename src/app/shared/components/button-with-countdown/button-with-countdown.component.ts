import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core'
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

  private countdownService = inject(CountdownService)

  public countdown$ = this.countdownService.countdown$

  public onClick(): void {
    this.buttonClicked.emit()
  }
}
