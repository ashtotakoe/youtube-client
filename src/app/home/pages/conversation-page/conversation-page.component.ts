import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { HomeFacade } from '../../home-store/services/home.facade'
import { CountdownNames } from 'src/app/core/enums/countdown-names.enum'

@Component({
  selector: 'cn-conversation-page',
  templateUrl: './conversation-page.component.html',
  styleUrls: ['./conversation-page.component.scss'],
})
export class ConversationPageComponent {
  public currentConversationChat$ = this.homeFacade.currentConversationChat$
  public isLoading$ = this.homeFacade.isLoading$

  public countdownName = CountdownNames.RefreshConversationChat

  public conversationId = this.route.snapshot.paramMap.get('id')
  constructor(
    private homeFacade: HomeFacade,
    private route: ActivatedRoute,
  ) {}

  public deleteConversation(conversationId?: string): void {
    console.log('delete conversation')
  }

  public refreshChat(): void {
    if (this.conversationId) {
      this.homeFacade.loadConversationChat({ conversationId: this.conversationId, isRefresh: true })
    }
  }

  public sendMessage(message: string): void {
    if (this.conversationId) {
      console.log('send message')
    }
  }
}
