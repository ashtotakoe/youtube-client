import { Directive, ElementRef, Input, Renderer2 } from '@angular/core'

import { calculateClassForColorBar } from '../utils/calculate-class-for-color-bar'

@Directive({
  selector: '[ytCustomColorBar]',
})
export class CustomColorBarDirective {
  @Input()
  public set ytCustomColorBar(date: string | undefined) {
    if (date) {
      this.setClass(date)
    }
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  public setClass(date: string): void {
    const calculatedClass = calculateClassForColorBar(date)
    this.renderer.addClass(this.element.nativeElement, calculatedClass)
  }
}
