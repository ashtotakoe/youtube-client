import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDividerModule } from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { SharedModule } from '../shared/shared.module'
import { AdminRoutingModule } from './admin-routing.module'
import { CreateVideoFormComponent } from './components/create-video-form/create-video-form.component'
import { CreateVideoPageComponent } from './pages/create-video-page/create-video-page.component'

@NgModule({
  declarations: [CreateVideoPageComponent, CreateVideoFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDividerModule,
    MatButtonModule,
    SharedModule,
  ],
})
export class AdminModule {}
