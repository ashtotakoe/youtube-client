import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { type SortData } from '../../shared/models/sort-data.model'

@Injectable({
  providedIn: 'root',
})
export class SortStateService {
  private sortState$$ = new BehaviorSubject<SortData | null>(null)
  public sortState$ = this.sortState$$.asObservable()

  public changeSortState(sortData: SortData | null): void {
    this.sortState$$.next(sortData)
  }
}
