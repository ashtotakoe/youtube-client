import type { Routes } from '@angular/router'

import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component'

export const routes: Routes = [
  {
    path: '',
    title: 'Sign up',
    component: SignUpPageComponent,
  },
]
