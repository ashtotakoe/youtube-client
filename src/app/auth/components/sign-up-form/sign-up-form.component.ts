import { ChangeDetectionStrategy, Component } from '@angular/core'
import { type AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

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
      Validators.minLength(6),
    ]),
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  public get email(): FormControl {
    return this.authForm.controls.email
  }

  public get password(): FormControl {
    return this.authForm.controls.password
  }

  public onSubmit(): void {
    const { email } = this.authForm.value

    if (email) {
      this.authService.signIn(email)
      this.router.navigate(['search'], { replaceUrl: true }).catch(() => null)
    }
  }
}
