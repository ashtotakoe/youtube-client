import type { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

import { numbersAndSpecialCharsRegExp } from '../constants/regExp.const'

export const noSpecialCharactersOrNumbersValidator: ValidatorFn = ({
  value,
}: AbstractControl): ValidationErrors | null => {
  if (numbersAndSpecialCharsRegExp.test(value as string)) {
    return {
      noSpecialCharsOrNumbers: 'Special characters and numbers are not allowed',
    }
  }

  return null
}
