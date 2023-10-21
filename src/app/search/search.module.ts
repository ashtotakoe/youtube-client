import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { SearchPageComponent } from './pages/search-page/search-page.component'
import { SearchRoutingModule } from './search-routing.module'

@NgModule({
  declarations: [SearchPageComponent],
  imports: [CommonModule, SearchRoutingModule],
})
export class SearchModule {}
