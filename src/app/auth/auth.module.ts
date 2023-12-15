import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { ButtonWithSpinnerComponent } from '../shared/components/button-with-spinner/button-with-spinner.component'
import { StoreFeatureNames } from '../shared/enums/store-feature-names.enum'
import { AuthEffects } from './auth-store/auth.effects'
import { authReducer } from './auth-store/auth.reducer'
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
    StoreModule.forFeature(StoreFeatureNames.Auth, authReducer),
    EffectsModule.forFeature(AuthEffects),
    MatProgressSpinnerModule,
    MatIconModule,
    ButtonWithSpinnerComponent,
  ],
})
export class AuthModule {}
