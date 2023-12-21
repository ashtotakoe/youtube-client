import type { Routes } from '@angular/router'

import { NotFoundComponent } from './core/components/not-found/not-found.component'
import { mustUserBeAuthorizedGuard } from './core/guards/must-user-be-authorized.guard'

export const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canMatch: [mustUserBeAuthorizedGuard(false)],
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canMatch: [mustUserBeAuthorizedGuard(true)],
  },

  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    canMatch: [mustUserBeAuthorizedGuard(true)],
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
]
