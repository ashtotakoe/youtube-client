import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { ButtonWithSpinnerComponent } from './button-with-spinner.component'

describe('ButtonWithSpinnerComponent', () => {
  let component: ButtonWithSpinnerComponent
  let fixture: ComponentFixture<ButtonWithSpinnerComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonWithSpinnerComponent],
    })
    fixture = TestBed.createComponent(ButtonWithSpinnerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
