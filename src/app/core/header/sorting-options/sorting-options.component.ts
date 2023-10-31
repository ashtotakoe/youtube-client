import { Component } from '@angular/core'
import { UntypedFormBuilder, Validators } from '@angular/forms'
import { map } from 'rxjs'

import type { SortFormChanges } from '../../model/sort-form-changes.model'

@Component({
  selector: 'yt-sorting-options',
  templateUrl: './sorting-options.component.html',
  styleUrls: ['./sorting-options.component.scss'],
})
export class SortingOptionsComponent {
  public sortForm = this.fb.group({
    sortType: ['views count'],
    sortingPrompt: ['', [Validators.minLength(3)]],
    sortOrder: ['ascending'],
  })

  public sortOptions = ['views count', 'title', 'date']
  public sortOrderOptions = ['ascending', 'descending']

  public isTitleInputOpen$ = this.sortForm.valueChanges.pipe(
    map((value: SortFormChanges) => value.sortType === 'title'),
  )

  public onSubmit(): void {
    console.log(this.sortForm.value)
  }

  constructor(private fb: UntypedFormBuilder) {}
}
