import type { Routes } from '@angular/router'

import { SearchResultsComponent } from './components/search-results/search-results.component'

export const searchRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SearchResultsComponent,
  },
]
