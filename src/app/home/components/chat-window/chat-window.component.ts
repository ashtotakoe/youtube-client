import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { Observable } from 'rxjs'

import { Group } from '../../models/group.model'
import type { Message } from '../../models/message.model'

@Component({
  selector: 'cn-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatWindowComponent {
  @Input({ required: true }) public group!: Group
  @Input() public isLoading$!: Observable<boolean>
  @Output() public messageSent = new EventEmitter<string>()

  public message = ''

  public sendMessage(): void {
    if (this.message) {
      this.messageSent.emit(this.message)
      this.message = ''
    }
  }

  public trackByMessage(index: number, { message }: Message): string {
    return message
  }
}