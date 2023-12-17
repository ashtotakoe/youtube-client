import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatGridListModule } from '@angular/material/grid-list'
import { RouterModule } from '@angular/router'

import { ButtonWithCountdownComponent } from '../shared/components/button-with-countdown/button-with-countdown.component'
import { HomePageComponent } from './home-page.component'
import { homeRoutes } from './home.routes'

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, ButtonWithCountdownComponent, RouterModule.forChild(homeRoutes), MatGridListModule],
})
export class HomeModule {}
