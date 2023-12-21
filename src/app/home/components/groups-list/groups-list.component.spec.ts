import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { GroupListComponent } from './groups-list.component'

describe('GroupListComponent', () => {
  let component: GroupListComponent
  let fixture: ComponentFixture<GroupListComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupListComponent],
    })
    fixture = TestBed.createComponent(GroupListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})