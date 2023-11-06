import { CommonModule, NgOptimizedImage } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'

import { SharedModule } from '../shared/shared.module'
import { VideoStatisticsComponent } from './components/video-statistics/video-statistics.component'
import { VideoComponent } from './components/video/video.component'
import { CustomColorBarDirective } from './directives/custom-color-bar.directive'
import { VideoDetailsPageComponent } from './pages/video-details-page/video-details-page.component'
import { VideosPageComponent } from './pages/videos-page/videos-page.component'
import { CustomSortPipe } from './pipes/custom-sort.pipe'
import { SearchRoutingModule } from './search-routing.module'

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
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    SharedModule,
  ],
})
export class SearchModule {}
