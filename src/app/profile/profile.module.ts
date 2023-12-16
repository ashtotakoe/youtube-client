import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router'

import { ButtonWithSpinnerComponent } from '../shared/components/button-with-spinner/button-with-spinner.component'
import { ProfilePageComponent } from './profile-page.component'
import { profileRoutes } from './profile.routes'

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    RouterModule.forChild(profileRoutes),
    MatCardModule,
    ButtonWithSpinnerComponent,
  ],
  declarations: [ProfilePageComponent],
  providers: [],
})
export class ProfileModule {}
