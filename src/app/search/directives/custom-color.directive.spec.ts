/* eslint-disable @typescript-eslint/consistent-type-assertions */
import type { ElementRef, Renderer2 } from '@angular/core'

import { CustomColorDirective } from './custom-color.directive'

describe('CustomColorDirective', () => {
  const mockElementRef = {} as ElementRef
  const mockRenderer2 = {} as Renderer2

  it('should create an instance', () => {
    const directive = new CustomColorDirective(mockElementRef, mockRenderer2)
    expect(directive).toBeTruthy()
  })
})
