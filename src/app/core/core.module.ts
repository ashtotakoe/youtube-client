import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { ProfileEffects } from '../profile/profile-store/profile.effects'
import { profileReducer } from '../profile/profile-store/profile.reducer'
import { ProfileFacade } from '../profile/profile-store/services/profile.facade'
import { StoreFeatureNames } from '../shared/enums/store-feature-names.enum'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    StoreModule.forFeature(StoreFeatureNames.Profile, profileReducer),
    EffectsModule.forFeature(ProfileEffects),
  ],
  providers: [ProfileFacade],
})
export class CoreModule {}
