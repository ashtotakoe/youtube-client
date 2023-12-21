import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { HomeFacade } from '../../home-store/services/home.facade'
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
  public isLoading$ = this.homeFacade.isLoading$

  public message = ''

  constructor(private homeFacade: HomeFacade) {}

  public sendMessage(): void {
    if (this.message) {
      this.homeFacade.sendMessage({ groupId: this.group.id, message: this.message })
      this.message = ''
    }
  }

  public trackByMessage(index: number, { message }: Message): string {
    return message
  }
}
