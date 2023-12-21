import type { Routes } from '@angular/router'

import { NotFoundComponent } from '../core/components/not-found/not-found.component'
import { currentConversationChatResolver } from './components/resolvers/current-conversation-chat.resolver'
import { currentGroupChatResolver } from './components/resolvers/current-group-chat.resolver'
import { HomePageComponent } from './home-page.component'
import { ConversationPageComponent } from './pages/conversation-page/conversation-page.component'
import { GroupPageComponent } from './pages/group-page/group-page.component'

export const homeRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },

  {
    path: 'group/:id',
    component: GroupPageComponent,
    resolve: {
      currentGroupChatResolver,
    },
  },

  {
    path: 'conversation/:id',
    component: ConversationPageComponent,
    resolve: {
      currentConversationChatResolver,
    },
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
]
