import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { AuthRoutingModule } from './auth-routing.module'
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component'
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component'

@NgModule({
  declarations: [SignUpFormComponent, SignUpPageComponent],
  imports: [CommonModule, AuthRoutingModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
})
export class AuthModule {}
