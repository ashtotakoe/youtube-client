import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { CreateGroupDialogFormComponent } from './create-group-dialog-form.component'

describe('CreateGroupDialogFormComponent', () => {
  let component: CreateGroupDialogFormComponent
  let fixture: ComponentFixture<CreateGroupDialogFormComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGroupDialogFormComponent],
    })
    fixture = TestBed.createComponent(CreateGroupDialogFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
