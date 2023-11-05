import { CommonModule, NgOptimizedImage } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'

import { SharedModule } from '../shared/shared.module'
import { SearchItemComponent } from './components/search-item/search-item.component'
import { VideoStatisticsComponent } from './components/video-statistics/video-statistics.component'
import { CustomColorBarDirective } from './directives/custom-color-bar.directive'
import { VideoDetailsPageComponent } from './pages/details-page/video-details-page.component'
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component'
import { CustomSortPipe } from './pipes/custom-sort.pipe'
import { SearchRoutingModule } from './search-routing.module'

@NgModule({
  declarations: [
    SearchResultsPageComponent,
    SearchItemComponent,
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
