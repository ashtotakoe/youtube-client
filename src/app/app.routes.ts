import type { Routes } from '@angular/router'

import { mustUserBeAuthorizedGuard } from './core/guards/must-user-be-authorized.guard'

export const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [mustUserBeAuthorizedGuard(false)],
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canMatch: [mustUserBeAuthorizedGuard(true)],
  },

  {
    path: '**',
    redirectTo: 'auth',
  },
]
