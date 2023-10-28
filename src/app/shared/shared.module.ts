import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { DefaultButtonComponent } from './components/default-button/default-button.component'
import { SearchComponent } from './components/search/search.component'

@NgModule({
  declarations: [SearchComponent],
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    DefaultButtonComponent,
  ],
  exports: [SearchComponent],
})
export class SharedModule {}
