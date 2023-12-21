import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, EventEmitter, Input, type OnInit, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import type { Observable } from 'rxjs'

import { CountdownService } from '../../../core/services/countdown.service'

@Component({
  selector: 'cn-button-with-countdown',
  templateUrl: './button-with-countdown.component.html',
  styleUrls: ['./button-with-countdown.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonWithCountdownComponent implements OnInit {
  @Input({ required: true }) public countdownName!: string
  @Input({ required: true }) public isLoading!: boolean | null
  @Output() public buttonClicked = new EventEmitter<void>()

  public countdown$!: Observable<number | null>

  constructor(private countdownService: CountdownService) {}

  public onClick(): void {
    if (!this.isLoading) {
      this.countdownService.addCountdownOrGetExisting(this.countdownName).startCountdown()
      this.buttonClicked.emit()
    }
  }

  public ngOnInit(): void {
    this.countdown$ = this.countdownService.addCountdownOrGetExisting(this.countdownName).countdown$
  }
}
