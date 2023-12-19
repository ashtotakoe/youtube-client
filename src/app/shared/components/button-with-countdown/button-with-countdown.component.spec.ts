import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { ButtonWithCountdownComponent } from './button-with-countdown.component'

describe('ButtonWithCountdownComponent', () => {
  let component: ButtonWithCountdownComponent
  let fixture: ComponentFixture<ButtonWithCountdownComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonWithCountdownComponent],
    })
    fixture = TestBed.createComponent(ButtonWithCountdownComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
