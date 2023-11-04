import type { Routes } from '@angular/router'

import { LogInPageComponent } from './pages/log-in-page/log-in-page.component'

export const routes: Routes = [
  {
    path: 'log-in',
    component: LogInPageComponent,
    title: 'login',
  },
]
