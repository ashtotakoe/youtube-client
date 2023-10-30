import { Directive, ElementRef, Input, Renderer2 } from '@angular/core'

import { millisecondsInDay } from '../consts/milliseconds-in-day'
import { calculateClassForColorBar } from '../utils/calculate-class-for-color-bar'

@Directive({
  selector: '[ytCustomColor]',
})
export class CustomColorDirective {
  @Input()
  public set ytCustomColor(date: string | undefined) {
    if (date) {
      const releaseTime = new Date(date).getTime()
      const currentTime = new Date().getTime()
      const daysPassed = Math.round((currentTime - releaseTime) / millisecondsInDay)
      this.setAppropriateClass(daysPassed)
    }
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  public setAppropriateClass(daysPassed: number): void {
    const calculatedClass = calculateClassForColorBar(daysPassed)
    this.renderer.setStyle(this.element.nativeElement, 'background', calculatedClass)
  }
}
