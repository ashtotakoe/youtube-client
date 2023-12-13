import type { Routes } from '@angular/router'

import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component'
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component'

export const authRoutes: Routes = [
  {
    path: 'signup',
    component: SignUpPageComponent,
  },

  {
    path: 'signin',
    component: SignInPageComponent,
  },

  {
    path: '**',
    redirectTo: 'signup',
  },
]
