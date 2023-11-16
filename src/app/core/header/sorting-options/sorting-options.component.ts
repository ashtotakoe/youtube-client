import { Component } from '@angular/core'
import { UntypedFormBuilder, Validators } from '@angular/forms'
import { map } from 'rxjs'

import { DefaultSortFormData } from '../../../shared/enums/default-sort-form-data.enum'
import type { SortFormData } from '../../../shared/models/sort-form-data.model'
import { YoutubeSortStateService } from '../../services/youtube-sort-state.service'

@Component({
  selector: 'yt-sorting-options',
  templateUrl: './sorting-options.component.html',
  styleUrls: ['./sorting-options.component.scss'],
})
export class SortingOptionsComponent {
  public sortForm = this.fb.group({
    sortType: [DefaultSortFormData.SortType],
    sortingPrompt: [DefaultSortFormData.SortingPrompt, [Validators.minLength(3)]],
    sortOrder: [DefaultSortFormData.SortOrder],
  })

  public sortOptions = ['views count', 'title', 'date']
  public sortOrderOptions = ['ascending', 'descending']

  public isTitleInputOpen$ = this.sortForm.valueChanges.pipe(map((value: SortFormData) => value.sortType === 'title'))

  public onSubmit(): void {
    this.sortState.setNewSortFormState(this.sortForm.value as SortFormData)
  }

  public onReset(): void {
    this.sortState.setNewSortFormState(null)
  }
  constructor(
    private fb: UntypedFormBuilder,
    private sortState: YoutubeSortStateService,
  ) {}
}
