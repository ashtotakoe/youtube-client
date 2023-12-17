import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatGridListModule } from '@angular/material/grid-list'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { ButtonWithCountdownComponent } from '../shared/components/button-with-countdown/button-with-countdown.component'
import { StoreFeatureNames } from '../shared/enums/store-feature-names.enum'
import { HomePageComponent } from './home-page.component'
import { HomeEffects } from './home-store/home.effects'
import { homeReducer } from './home-store/home.reducer'
import { HomeFacade } from './home-store/services/home.facade'
import { homeRoutes } from './home.routes'

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(StoreFeatureNames.Home, homeReducer),
    EffectsModule.forFeature(HomeEffects),
    ButtonWithCountdownComponent,
    RouterModule.forChild(homeRoutes),
    MatGridListModule,
  ],
  providers: [HomeFacade],
})
export class HomeModule {}
