import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'yt-default-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss'],
})
export class DefaultButtonComponent {
  @Output() public buttonClicked = new EventEmitter()
  @Input() public color: 'primary' | 'basic' = 'primary'

  public buttonActivated(): void {
    this.buttonClicked.emit()
  }
}
