import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'

import { SharedModule } from '../shared/shared.module'
import { ColorBarComponent } from './components/color-bar/color-bar.component'
import { SearchItemComponent } from './components/search-item/search-item.component'
import { SearchResultsComponent } from './components/search-results/search-results.component'
import { VideoStatisticsComponent } from './components/video-statistics/video-statistics.component'
import { CustomColorDirective } from './directives/custom-color.directive'
import { SearchRoutingModule } from './search-routing.module'

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    VideoStatisticsComponent,
    ColorBarComponent,
    CustomColorDirective,
  ],
  imports: [CommonModule, SearchRoutingModule, MatIconModule, MatCardModule, SharedModule],
})
export class SearchModule {}
