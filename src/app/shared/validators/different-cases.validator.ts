import type { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

import { differentCasesRegExp } from '../constants/regExp.constant'

export const differentCasesValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (differentCasesRegExp.test(control.value as string)) {
    return null
  }

  return {
    passwordStrength: 'There must be at least one uppercase and lowercase letter',
  }
}
