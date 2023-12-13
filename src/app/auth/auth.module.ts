import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router'

import { authRoutes } from './auth.routes'
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component'
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component'
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component'
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component'

@NgModule({
  declarations: [SignUpPageComponent, SignInPageComponent, SignUpFormComponent, SignInFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
})
export class AuthModule {}
