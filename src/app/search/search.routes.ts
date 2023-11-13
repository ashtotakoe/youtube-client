import type { Routes } from '@angular/router'

import { VideoDetailsPageComponent } from './pages/video-details-page/video-details-page.component'
import { VideosPageComponent } from './pages/videos-page/videos-page.component'
import { detailsResolver } from './resolvers/details.resolver'

export const searchRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VideosPageComponent,
  },

  {
    path: ':id',
    component: VideoDetailsPageComponent,
    title: 'Details',
    resolve: {
      details: detailsResolver,
    },
  },
]
