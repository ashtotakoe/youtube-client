import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'

import { ColorBarComponent } from './components/color-bar/color-bar.component'
import { SearchItemComponent } from './components/search-item/search-item.component'
import { SearchResultsComponent } from './components/search-results/search-results.component'
import { VideoStatisticsComponent } from './components/video-statistics/video-statistics.component'
import { SearchRoutingModule } from './search-routing.module'

@NgModule({
  declarations: [SearchResultsComponent, SearchItemComponent, VideoStatisticsComponent, ColorBarComponent],
  imports: [CommonModule, SearchRoutingModule, MatIconModule, MatCardModule],
})
export class SearchModule {}
