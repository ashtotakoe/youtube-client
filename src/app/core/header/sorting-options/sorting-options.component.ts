import { Component, type OnDestroy } from '@angular/core'
import { UntypedFormBuilder, Validators } from '@angular/forms'
import { tap } from 'rxjs'

import type { SortFormChanges } from '../../model/sort-form-changes.model'

@Component({
  selector: 'yt-sorting-options',
  templateUrl: './sorting-options.component.html',
  styleUrls: ['./sorting-options.component.scss'],
})
export class SortingOptionsComponent implements OnDestroy {
  public sortForm = this.fb.group({
    sortType: ['title'],
    sortingPrompt: ['', [Validators.minLength(3)]],
  })

  public sortOptions = ['title', 'date', 'views count']

  public valueChange$ = this.sortForm.valueChanges
    .pipe(
      tap((changes: SortFormChanges) => {
        if (changes.sortType) {
          this.isTitleInputOpen = true

          return
        }

        this.isTitleInputOpen = false
      }),
    )
    .subscribe()

  public isTitleInputOpen = true

  constructor(private fb: UntypedFormBuilder) {}

  public ngOnDestroy(): void {
    this.valueChange$.unsubscribe()
  }
}
