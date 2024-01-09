import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'

import { SignUpFormComponent } from '../../components/sign-up-form/sign-up-form.component'
import { SignUpPageComponent } from './sign-up-page.component'

describe('LogInPageComponent', () => {
  let component: SignUpPageComponent
  let fixture: ComponentFixture<SignUpPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpPageComponent, SignUpFormComponent],
      imports: [MatFormFieldModule, ReactiveFormsModule],
    }).compileComponents()

    fixture = TestBed.createComponent(SignUpPageComponent)
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
