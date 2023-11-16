import { TestBed } from '@angular/core/testing'

import { SearchRequestService } from './send-search-request.service'

describe('SendSearchRequestService', () => {
  let service: SearchRequestService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(SearchRequestService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
