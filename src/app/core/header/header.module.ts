import { CommonModule, NgOptimizedImage } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

import { SharedModule } from '../../shared/shared.module'
import { HeaderComponent } from './components/header/header.component'
import { SearchRequestService } from './services/send-search-request.service'
import { SortingOptionsComponent } from './sorting-options/sorting-options.component'

@NgModule({
  declarations: [HeaderComponent, SortingOptionsComponent],
  imports: [CommonModule, SharedModule, NgOptimizedImage, MatButtonModule, MatIconModule],
  providers: [SearchRequestService],
  exports: [HeaderComponent, CommonModule],
})
export class HeaderModule {}
