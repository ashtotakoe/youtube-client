import type { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export const dateValidator: ValidatorFn = ({ value }: AbstractControl): ValidationErrors | null => {
  if (value && (value as Date).getTime() <= Date.now()) {
    return null
  }

  return {
    futureDate: true,
  }
}
