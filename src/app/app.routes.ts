import type { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search',
  },

  {
    path: 'search',
    title: 'Search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule),
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },

  {
    path: 'not-found',
    loadComponent: () => import('./core/components/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Not found',
  },

  {
    path: '**',
    redirectTo: 'not-found',
  },
]
