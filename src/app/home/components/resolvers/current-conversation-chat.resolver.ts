import { inject } from '@angular/core'
import type { ResolveFn } from '@angular/router'

import { HomeFacade } from '../../home-store/services/home.facade'
import type { User } from '../../models/user.model'

export const currentConversationChatResolver: ResolveFn<User | null> = route => {
  const homeFacade = inject(HomeFacade)
  const conversationId = route.paramMap.get('id')

  if (conversationId) {
    homeFacade.loadConversationChat({ conversationId, isRefresh: false })
  }

  return homeFacade.currentConversationChat$
}
