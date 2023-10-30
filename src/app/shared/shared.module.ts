import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { CustomButtonComponent } from './components/custom-button/custom-button.component'
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
    CustomButtonComponent,
  ],
  exports: [SearchComponent, CustomButtonComponent],
})
export class SharedModule {}
