import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { ButtonWithConfirmationComponent } from './button-with-confirmation.component'

describe('ButtonWithConfirmationComponent', () => {
  let component: ButtonWithConfirmationComponent
  let fixture: ComponentFixture<ButtonWithConfirmationComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonWithConfirmationComponent],
    })
    fixture = TestBed.createComponent(ButtonWithConfirmationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
