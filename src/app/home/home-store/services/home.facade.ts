import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

@Injectable()
export class HomeFacade {
  constructor(private store: Store) {}
}
