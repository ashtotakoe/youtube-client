import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { SearchItemComponent } from './components/search-item/search-item.component'
import { SearchResultsComponent } from './components/search-results/search-results.component'
import { SearchRoutingModule } from './search-routing.module'

@NgModule({
  declarations: [SearchResultsComponent, SearchItemComponent],
  imports: [CommonModule, SearchRoutingModule],
})
export class SearchModule {}
