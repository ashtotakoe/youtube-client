import { ElementRef, Renderer2 } from '@angular/core'
import { TestBed } from '@angular/core/testing'

import { CustomColorBarDirective } from './custom-color-bar.directive'

describe('CustomColorBarDirective', () => {
  let elementRef: ElementRef
  let renderer2: Renderer2

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Renderer2],
    })

    elementRef = new ElementRef({})
    renderer2 = TestBed.inject(Renderer2)
  })

  it('should create an instance', () => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const directive = new CustomColorBarDirective(elementRef, renderer2)
    expect(directive).toBeTruthy()
  })
})
