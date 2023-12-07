import { TestBed } from '@angular/core/testing'

import { FavoriteVideosService } from './favorite-videos.service'

describe('FavoriteVideosServiceService', () => {
  let service: FavoriteVideosService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(FavoriteVideosService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
