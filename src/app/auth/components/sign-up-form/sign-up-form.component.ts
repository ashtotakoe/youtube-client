import { ChangeDetectionStrategy, Component } from '@angular/core'
import { type AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms'

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

  constructor(private fb: FormBuilder) {}

  public get email(): FormControl {
    return this.authForm.controls.email
  }

  public get password(): FormControl {
    return this.authForm.controls.password
  }

  public onSubmit(): void {
    console.log('form submitted')
  }
}
