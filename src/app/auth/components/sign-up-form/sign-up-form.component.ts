import { Component } from '@angular/core'
import { type AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

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
  public authForm = this.fb.group({
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

  public name = this.authForm.controls.name
  public email = this.authForm.controls.email
  public password = this.authForm.controls.password

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  public onSubmit(): void {
    this.router.navigate(['/', 'auth', 'signin'], { replaceUrl: true }).catch(() => null)
  }
}
