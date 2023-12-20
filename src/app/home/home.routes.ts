import type { Routes } from '@angular/router'

import { NotFoundComponent } from '../core/components/not-found/not-found.component'
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
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
]