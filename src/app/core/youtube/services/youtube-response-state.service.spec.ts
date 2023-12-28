import { TestBed } from '@angular/core/testing'

import { YoutubeResponseStateService } from './youtube-response-state.service'

describe('YoutubeResponseStateService', () => {
  let service: YoutubeResponseStateService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(YoutubeResponseStateService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
