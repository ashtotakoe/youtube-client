import { CommonModule, NgOptimizedImage } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { RouterModule } from '@angular/router'

import { SharedModule } from '../../shared/shared.module'
import { HeaderComponent } from './components/header/header.component'
import { ProfileComponent } from './components/profile/profile.component'
import { SortingOptionsComponent } from './components/sorting-options/sorting-options.component'
import { SearchRequestService } from './services/send-search-request.service'

@NgModule({
  declarations: [HeaderComponent, SortingOptionsComponent, ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgOptimizedImage,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [SearchRequestService],
  exports: [HeaderComponent, CommonModule],
})
export class HeaderModule {}
