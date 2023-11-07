import { TestBed } from '@angular/core/testing'

import { SortStateService } from './sort-state.service'

describe('YoutubeSortStateService', () => {
  let service: SortStateService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(SortStateService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
