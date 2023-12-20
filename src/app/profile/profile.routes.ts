import type { Routes } from '@angular/router'

import { NotFoundComponent } from '../core/components/not-found/not-found.component'
import { ProfilePageComponent } from './profile-page.component'

export const profileRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProfilePageComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
]
