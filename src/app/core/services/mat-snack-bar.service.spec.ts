import { TestBed } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'

import { MatSnackBarService } from './mat-snack-bar.service'

describe('MatSnackBarService', () => {
  let service: MatSnackBarService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatSnackBar],
    })
    service = TestBed.inject(MatSnackBarService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
