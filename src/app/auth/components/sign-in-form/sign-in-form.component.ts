import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'

import { AuthFacade } from '../../auth-store/services/auth.facade'
import { emailValidators, passwordValidators } from 'src/app/shared/constants/forms-validators-sets'

@Component({
  selector: 'cn-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInFormComponent {
  public isLoading$ = this.authFacade.isLoading$

  public signUpForm = this.fb.group({
    email: new FormControl<string>('', emailValidators),
    password: new FormControl<string>('', passwordValidators),
  })

  public email = this.signUpForm.controls.email
  public password = this.signUpForm.controls.password

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
  ) {}

  public onSubmit(): void {
    const { email, password } = this.signUpForm.getRawValue()
    this.authFacade.signIn({
      email: email ?? '',
      password: password ?? '',
    })
  }
}
