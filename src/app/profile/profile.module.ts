import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { StoreFeatureNames } from '../shared/enums/store-feature-names.enum'
import { ProfilePageComponent } from './profile-page.component'
import { ProfileEffects } from './profile-store/profile.effects'
import { profileReducer } from './profile-store/profile.reducer'
import { ProfileFacade } from './profile-store/services/profile.facade'
import { profileRoutes } from './profile.routes'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(StoreFeatureNames.Profile, profileReducer),
    EffectsModule.forFeature(ProfileEffects),
    RouterModule.forChild(profileRoutes),
  ],
  declarations: [ProfilePageComponent],
  providers: [ProfileFacade],
})
export class ProfileModule {}
