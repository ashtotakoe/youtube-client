import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { ButtonWithCountdownComponent } from '../shared/components/button-with-countdown/button-with-countdown.component'
import { ButtonWithSpinnerComponent } from '../shared/components/button-with-spinner/button-with-spinner.component'
import { StoreFeatureNames } from '../shared/enums/store-feature-names.enum'
import { CreateGroupDialogFormComponent } from './components/create-group-dialog-form/create-group-dialog-form.component'
import { GroupListItemComponent } from './components/group-list-item/group-list-item.component'
import { GroupListComponent } from './components/groups-list/groups-list.component'
import { UsersListItemComponent } from './components/users-list-item/users-list-item.component'
import { UsersListComponent } from './components/users-list/users-list.component'
import { HomePageComponent } from './home-page.component'
import { HomeEffects } from './home-store/home.effects'
import { homeReducer } from './home-store/home.reducer'
import { HomeFacade } from './home-store/services/home.facade'
import { homeRoutes } from './home.routes'
import { GroupPageComponent } from './pages/group-page/group-page.component'
import { DialogStateService } from './services/dialog-state.service'

@NgModule({
  declarations: [
    HomePageComponent,
    GroupListComponent,
    CreateGroupDialogFormComponent,
    GroupListItemComponent,
    UsersListComponent,
    UsersListItemComponent,
    GroupPageComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(StoreFeatureNames.Home, homeReducer),
    EffectsModule.forFeature(HomeEffects),
    ButtonWithCountdownComponent,
    RouterModule.forChild(homeRoutes),
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    ButtonWithSpinnerComponent,
  ],
  providers: [HomeFacade, DialogStateService],
})
export class HomeModule {}
