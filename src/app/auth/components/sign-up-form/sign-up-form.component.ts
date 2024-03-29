import { ChangeDetectionStrategy, Component } from '@angular/core'
import { type AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { differentCasesValidator } from '../../../shared/validators/different-cases.validator'
import { lettersAndNumberPresenceValidator } from '../../../shared/validators/letters-and-number-presence.validator'
import { specialCharactersValidator } from '../../../shared/validators/special-characters.validator'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'yt-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpFormComponent {
  public authForm = this.fb.group({
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

  public email = this.authForm.controls.email
  public password = this.authForm.controls.password

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  public onSubmit(): void {
    const { email } = this.authForm.value

    if (email) {
      this.authService.signIn(email)
      this.router.navigate(['search'], { replaceUrl: true }).catch(() => null)
    }
  }
}
