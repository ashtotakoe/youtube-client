import type { ColorBarClass } from '../types/color-bar-classes.type'

export function calculateClassForColorBar(dayCount: number): ColorBarClass {
  if (dayCount < 7) {
    return 'blue'
  }

  if (dayCount < 30) {
    return 'green'
  }

  if (dayCount < 90) {
    return 'yellow'
  }

  return 'red'
}
