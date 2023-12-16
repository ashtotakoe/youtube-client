import type { Routes } from '@angular/router'

import { ProfilePageComponent } from './profile-page.component'

export const profileRoutes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
]
