import { Component } from '@angular/core'
import { type AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms'

import { AuthFacade } from '../../auth-store/services/auth.facade'
import { MatSnackBarService } from 'src/app/core/services/mat-snack-bar.service'
import { convertToUserData } from 'src/app/shared/utils/convert-to-user-data'
import { differentCasesValidator } from 'src/app/shared/validators/different-cases.validator'
import { lettersAndNumberPresenceValidator } from 'src/app/shared/validators/letters-and-number-presence.validator'
import { noSpecialCharactersOrNumbersValidator } from 'src/app/shared/validators/no-special-characters-or-numbers.validator'
import { specialCharactersValidator } from 'src/app/shared/validators/special-characters.validator'

@Component({
  selector: 'cn-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  public signUpForm = this.fb.group({
    name: new FormControl<string>('', [
      (control: AbstractControl) => Validators.required(control),
      (control: AbstractControl) => Validators.maxLength(40)(control),
      (control: AbstractControl) => noSpecialCharactersOrNumbersValidator(control),
    ]),
    email: new FormControl<string>('', [
      (control: AbstractControl) => Validators.required(control),
      (control: AbstractControl) => Validators.email(control),
    ]),
    password: new FormControl<string>('', [
      (control: AbstractControl) => Validators.required(control),
      (control: AbstractControl) => Validators.minLength(8)(control),
      (control: AbstractControl) => differentCasesValidator(control),
      (control: AbstractControl) => specialCharactersValidator(control),
      (control: AbstractControl) => lettersAndNumberPresenceValidator(control),
    ]),
  })

  public name = this.signUpForm.controls.name
  public email = this.signUpForm.controls.email
  public password = this.signUpForm.controls.password

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
    private snack: MatSnackBarService,
  ) {}

  public onSubmit(): void {
    const userData = convertToUserData(this.signUpForm.getRawValue())
    this.authFacade.signUp(userData)
  }
}
