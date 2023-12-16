import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HomePageComponent } from './home-page.component'
import { homeRoutes } from './home.routes'

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule.forChild(homeRoutes)],
})
export class HomeModule {}
