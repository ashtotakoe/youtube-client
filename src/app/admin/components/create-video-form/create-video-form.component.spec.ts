import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { CreateVideoFormComponent } from './create-video-form.component'

describe('CreateVideoFormComponent', () => {
  let component: CreateVideoFormComponent
  let fixture: ComponentFixture<CreateVideoFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateVideoFormComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CreateVideoFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
