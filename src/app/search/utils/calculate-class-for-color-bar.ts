import { ColorBarClasses } from '../enums/color-bar-classes.enum'
import type { ColorBarClass } from '../types/color-bar-classes.type'
import { calculatePassedDays } from './calculate-passed-days'

export function calculateClassForColorBar(date: string): ColorBarClass {
  const dayCount = calculatePassedDays(date)

  if (dayCount < 7) {
    return ColorBarClasses.Blue
  }

  if (dayCount < 30) {
    return ColorBarClasses.Green
  }

  if (dayCount < 90) {
    return ColorBarClasses.Yellow
  }

  return ColorBarClasses.Red
}
