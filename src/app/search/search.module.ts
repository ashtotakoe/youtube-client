import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'

import { SharedModule } from '../shared/shared.module'
import { SearchItemComponent } from './components/search-item/search-item.component'
import { SearchResultsComponent } from './components/search-results/search-results.component'
import { VideoStatisticsComponent } from './components/video-statistics/video-statistics.component'
import { CustomColorBarDirective } from './directives/custom-color-bar.directive'
import { SearchRoutingModule } from './search-routing.module'

@NgModule({
  declarations: [SearchResultsComponent, SearchItemComponent, VideoStatisticsComponent, CustomColorBarDirective],
  imports: [CommonModule, SearchRoutingModule, MatIconModule, MatButtonModule, MatCardModule, SharedModule],
})
export class SearchModule {}
