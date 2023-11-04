import type { Routes } from '@angular/router'

import { VideoDetailsPageComponent } from './pages/details-page/video-details-page.component'
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component'
import { detailsResolver } from './resolvers/details.resolver'

export const searchRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SearchResultsPageComponent,
  },

  {
    path: 'details/:id',
    component: VideoDetailsPageComponent,
    title: 'Details',
    resolve: {
      details: detailsResolver,
    },
  },
]
