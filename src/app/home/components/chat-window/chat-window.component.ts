import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import type { Message } from '../../models/message.model'

@Component({
  selector: 'cn-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatWindowComponent {
  @Input({ required: true }) public messages: Message[] | undefined

  public trackByMessage(index: number, { message }: Message): string {
    return message
  }
}
