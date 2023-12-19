import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { Observable } from 'rxjs'

@Component({
  selector: 'cn-button-with-spinner',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './button-with-spinner.component.html',
  styleUrls: ['./button-with-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonWithSpinnerComponent {
  @Input() public isLoading$!: Observable<boolean>
  @Input() public isDisabled = false
  @Input() public color = 'primary'

  @Output() public buttonClicked = new EventEmitter<void>()

  public onClick(): void {
    this.buttonClicked.emit()
  }
}
