import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { HeaderComponent } from './components/header/header.component'
import { SortingOptionsComponent } from './sorting-options/sorting-options.component'

@NgModule({
  declarations: [HeaderComponent, SortingOptionsComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, CommonModule],
})
export class HeaderModule {}
