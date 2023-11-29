import { CommonModule, NgOptimizedImage } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { StoreFeatureNames } from '../core/enums/store-feature-names.enum'
import { SharedModule } from '../shared/shared.module'
import { VideoStatisticsComponent } from './components/video-statistics/video-statistics.component'
import { VideoComponent } from './components/video/video.component'
import { CustomColorBarDirective } from './directives/custom-color-bar.directive'
import { VideoDetailsPageComponent } from './pages/video-details-page/video-details-page.component'
import { VideosPageComponent } from './pages/videos-page/videos-page.component'
import { CustomSortPipe } from './pipes/custom-sort.pipe'
import { SearchRoutingModule } from './search-routing.module'
import { SearchEffects } from './search-store/search.effects'
import { videosReducer } from './search-store/search.reducer'

@NgModule({
  declarations: [
    VideosPageComponent,
    VideoComponent,
    VideoStatisticsComponent,
    CustomColorBarDirective,
    CustomSortPipe,
    VideoDetailsPageComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    SearchRoutingModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    SharedModule,
    StoreModule.forFeature(StoreFeatureNames.Search, videosReducer),
    EffectsModule.forFeature(SearchEffects),
  ],
})
export class SearchModule {}
