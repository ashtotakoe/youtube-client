import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'yt-custom-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomButtonComponent {
  @Output() public buttonClicked = new EventEmitter()
  @Input() public color: 'primary' | 'basic' = 'primary'

  public buttonActivated(): void {
    this.buttonClicked.emit()
  }
}
