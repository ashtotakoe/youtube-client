import type { Routes } from '@angular/router'

import { NotFoundComponent } from '../core/components/not-found/not-found.component'
import { AuthRoutePaths } from '../shared/enums/auth-route-paths.enum'
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component'
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component'

export const authRoutes: Routes = [
  {
    path: AuthRoutePaths.SignUp,
    component: SignUpPageComponent,
  },

  {
    path: AuthRoutePaths.SignIn,
    component: SignInPageComponent,
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signin',
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
]
