import { CommonModule, NgOptimizedImage } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'

import { HeaderComponent } from './components/header/header.component'
import { SortingOptionsComponent } from './sorting-options/sorting-options.component'

@NgModule({
  declarations: [HeaderComponent, SortingOptionsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [HeaderComponent, CommonModule],
})
export class HeaderModule {}
