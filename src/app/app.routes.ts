import type { Routes } from '@angular/router'

import { authGuard } from './core/guards/auth.guard'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search',
  },

  {
    path: 'search',
    title: 'Search',
    canMatch: [authGuard('user')],
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule),
  },

  {
    path: 'auth',
    canMatch: [authGuard('guest')],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },

  {
    path: 'not-found',
    title: 'Not found',
    canMatch: [authGuard('user')],
    loadComponent: () => import('./core/components/not-found/not-found.component').then(m => m.NotFoundComponent),
  },

  {
    path: '**',
    redirectTo: 'not-found',
  },
]
