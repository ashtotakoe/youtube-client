import { type AbstractControl, type ValidationErrors, Validators } from '@angular/forms'

import { differentCasesValidator } from 'src/app/shared/validators/different-cases.validator'
import { lettersAndNumberPresenceValidator } from 'src/app/shared/validators/letters-and-number-presence.validator'
import { noSpecialCharactersOrNumbersValidator } from 'src/app/shared/validators/no-special-characters-or-numbers.validator'
import { specialCharactersValidator } from 'src/app/shared/validators/special-characters.validator'

export const nameValidators = [
  (control: AbstractControl): ValidationErrors | null => Validators.required(control),
  (control: AbstractControl): ValidationErrors | null => Validators.maxLength(40)(control),
  (control: AbstractControl): ValidationErrors | null => noSpecialCharactersOrNumbersValidator(control),
]

export const emailValidators = [
  (control: AbstractControl): ValidationErrors | null => Validators.required(control),
  (control: AbstractControl): ValidationErrors | null => Validators.email(control),
]

export const passwordValidators = [
  (control: AbstractControl): ValidationErrors | null => Validators.required(control),
  (control: AbstractControl): ValidationErrors | null => Validators.minLength(8)(control),
  (control: AbstractControl): ValidationErrors | null => differentCasesValidator(control),
  (control: AbstractControl): ValidationErrors | null => specialCharactersValidator(control),
  (control: AbstractControl): ValidationErrors | null => lettersAndNumberPresenceValidator(control),
]
