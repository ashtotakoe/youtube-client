import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { AdminRoutingModule } from './admin-routing.module'
import { CreateVideoFormComponent } from './components/create-video-form/create-video-form.component'
import { CreateVideoPageComponent } from './pages/create-video-page/create-video-page.component'

@NgModule({
  declarations: [CreateVideoPageComponent, CreateVideoFormComponent],
  imports: [CommonModule, AdminRoutingModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
})
export class AdminModule {}
