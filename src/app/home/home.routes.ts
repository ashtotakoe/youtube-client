import { HomePageComponent } from './home-page.component'

export const homeRoutes = [
  {
    path: '',
    component: HomePageComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
]
