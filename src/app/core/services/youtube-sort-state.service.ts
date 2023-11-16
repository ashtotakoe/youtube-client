import { Injectable } from '@angular/core'
import { BehaviorSubject, type Observable } from 'rxjs'

import { type SortFormData } from '../../shared/models/sort-form-data.model'

@Injectable({
  providedIn: 'root',
})
export class YoutubeSortStateService {
  private sortFormState$$ = new BehaviorSubject<SortFormData | null>(null)

  public getSortFormState(): Observable<SortFormData | null> {
    return this.sortFormState$$.asObservable()
  }

  public setNewSortFormState(sortFormData: SortFormData | null): void {
    this.sortFormState$$.next(sortFormData)
  }
}
