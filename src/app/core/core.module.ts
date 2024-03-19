import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { StoreFeatureNames } from './enums/store-feature-names.enum'
import { HeaderModule } from './header/header.module'
import { VideosEffects } from './videos-store/videos.effects'
import { videosReducer } from './videos-store/videos.reducer'

@NgModule({
  imports: [
    HeaderModule,
    HttpClientModule,
    StoreModule.forFeature(StoreFeatureNames.Videos, videosReducer),
    EffectsModule.forFeature(VideosEffects),
  ],
  exports: [HeaderModule],
  providers: [MatSnackBar],
})
export class CoreModule {}
