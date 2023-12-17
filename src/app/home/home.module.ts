import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { ButtonWithCountdownComponent } from '../shared/components/button-with-countdown/button-with-countdown.component'
import { StoreFeatureNames } from '../shared/enums/store-feature-names.enum'
import { GroupListComponent } from './components/groups-list/groups-list.component'
import { HomePageComponent } from './home-page.component'
import { HomeEffects } from './home-store/home.effects'
import { homeReducer } from './home-store/home.reducer'
import { HomeFacade } from './home-store/services/home.facade'
import { homeRoutes } from './home.routes'

@NgModule({
  declarations: [HomePageComponent, GroupListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(StoreFeatureNames.Home, homeReducer),
    EffectsModule.forFeature(HomeEffects),
    ButtonWithCountdownComponent,
    RouterModule.forChild(homeRoutes),
    MatGridListModule,
    MatButtonModule,
    MatListModule,
  ],
  providers: [HomeFacade],
})
export class HomeModule {}
