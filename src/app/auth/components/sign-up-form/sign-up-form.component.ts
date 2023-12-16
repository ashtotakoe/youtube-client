import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'

import { AuthFacade } from '../../auth-store/services/auth.facade'
import { emailValidators, nameValidators, passwordValidators } from '../../constants/auth-forms-validators'
import { convertToUserRegistrationData } from 'src/app/shared/utils/convert-to-user-registration-data'

@Component({
  selector: 'cn-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpFormComponent {
  public isLoading$ = this.authFacade.isLoading$

  public signUpForm = this.fb.group({
    name: new FormControl<string>('', nameValidators),
    email: new FormControl<string>('', emailValidators),
    password: new FormControl<string>('', passwordValidators),
  })

  public name = this.signUpForm.controls.name
  public email = this.signUpForm.controls.email
  public password = this.signUpForm.controls.password

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
  ) {}

  public onSubmit(): void {
    const userRegistrationData = convertToUserRegistrationData(this.signUpForm.getRawValue())
    this.authFacade.signUp(userRegistrationData)
  }
}
