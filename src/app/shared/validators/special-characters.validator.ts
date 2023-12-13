import type { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

import { specialCharsRegExp } from '../constants/regExp.const'

export const specialCharactersValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (specialCharsRegExp.test(control.value as string)) {
    return null
  }

  return {
    passwordStrength: 'There must be at least one special character',
  }
}
