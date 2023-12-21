import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'cn-button-with-confirmation',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './button-with-confirmation.component.html',
  styleUrls: ['./button-with-confirmation.component.scss'],
})
export class ButtonWithConfirmationComponent {
  @Output() public buttonClicked = new EventEmitter<void>()

  public isConfirmationOpened = false

  public toggleConfirmation(): void {
    this.isConfirmationOpened = !this.isConfirmationOpened
  }

  public onClick(): void {
    this.buttonClicked.emit()
  }
}
