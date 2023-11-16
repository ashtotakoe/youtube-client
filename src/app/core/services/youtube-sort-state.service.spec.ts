import { TestBed } from '@angular/core/testing'

import { YoutubeSortStateService } from './youtube-sort-state.service'

describe('YoutubeSortStateService', () => {
  let service: YoutubeSortStateService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(YoutubeSortStateService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
