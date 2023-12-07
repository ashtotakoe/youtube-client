import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { RouterModule } from '@angular/router'

import { CustomButtonComponent } from './components/custom-button/custom-button.component'
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component'
import { SearchComponent } from './components/search/search.component'

@NgModule({
  declarations: [SearchComponent],
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CustomButtonComponent,
    RouterModule,
    FavoriteButtonComponent,
  ],
  exports: [SearchComponent, CustomButtonComponent, FavoriteButtonComponent],
})
export class SharedModule {}
