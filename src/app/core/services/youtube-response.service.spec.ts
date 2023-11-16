import { TestBed } from '@angular/core/testing'

import { YoutubeResponseService } from './youtube-response.service'

describe('YoutubeStateService', () => {
  let service: YoutubeResponseService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(YoutubeResponseService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
