import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { SearchResultsPageComponent } from './search-results-page.component'

describe('SearchResultsComponent', () => {
  let component: SearchResultsPageComponent
  let fixture: ComponentFixture<SearchResultsPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchResultsPageComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SearchResultsPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
