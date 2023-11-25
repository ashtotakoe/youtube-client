import type { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

import { lettersAndNumbersRegExp } from '../constants/regExp.constant'

export const lettersAndNumberPresenceValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (lettersAndNumbersRegExp.test(control.value as string)) {
    return null
  }

  return {
    passwordStrength: 'There must be at least one letter and number',
  }
}
