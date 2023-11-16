import { TestBed } from '@angular/core/testing'

import { YoutubeStateService } from './youtube-state.service'

describe('YoutubeStateService', () => {
  let service: YoutubeStateService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(YoutubeStateService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
