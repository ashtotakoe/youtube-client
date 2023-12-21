import type { Routes } from '@angular/router'

import { NotFoundComponent } from '../core/components/not-found/not-found.component'
import { currentChatResolver } from './components/resolvers/current-chat.resolver'
import { HomePageComponent } from './home-page.component'
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
      currentChat: currentChatResolver,
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
]
