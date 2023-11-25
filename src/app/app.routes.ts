import type { Routes } from '@angular/router'

import { AuthTypes } from './core/enums/auth-types.enum'
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
    canMatch: [authGuard(AuthTypes.User)],
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule),
  },

  {
    path: 'auth',
    title: 'Sign up',
    canMatch: [authGuard(AuthTypes.Guest)],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },

  {
    path: 'admin',
    title: 'Admin',
    canMatch: [authGuard(AuthTypes.User)],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },

  {
    path: 'not-found',
    title: 'Not found',
    canMatch: [authGuard(AuthTypes.User)],
    loadComponent: () => import('./core/components/not-found/not-found.component').then(m => m.NotFoundComponent),
  },

  {
    path: '**',
    redirectTo: 'not-found',
  },
]
