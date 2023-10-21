import type { Routes } from '@angular/router'

import { SearchPageComponent } from './pages/search-page/search-page.component'

export const searchRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SearchPageComponent,
  },
]
