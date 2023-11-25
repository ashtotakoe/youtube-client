import type { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

import { specialCharacterRegExp } from '../constants/regExp.constant'

export const specialCharactersValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (specialCharacterRegExp.test(control.value as string)) {
    return null
  }

  return {
    passwordStrength: 'There must be at least one special character',
  }
}
