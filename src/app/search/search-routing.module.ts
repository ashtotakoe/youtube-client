import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { searchRoutes } from './search.routes'

@NgModule({
  imports: [RouterModule.forChild(searchRoutes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
