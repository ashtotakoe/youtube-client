import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'

import { DefaultSortFormData } from '../../../../search/enums/default-sort-form-data.enum'
import { SortDirections } from '../../../../search/enums/sort-directions.enum'
import { SortTypes } from '../../../../search/enums/sort-types.enum'
import { convertRawValueToSortData } from '../../../../search/utils/convert-raw-value-to-form-data'
import type { SortData } from '../../../../shared/models/sort-data.model'
import { SortStateService } from '../../../services/sort-state.service'

@Component({
  selector: 'yt-sorting-options',
  templateUrl: './sorting-options.component.html',
  styleUrls: ['./sorting-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortingOptionsComponent {
  public sortForm = this.fb.group({
    type: new FormControl<SortData['type']>(DefaultSortFormData.Type),
    direction: new FormControl<SortData['direction']>(DefaultSortFormData.Direction),
  })

  public sortOptions = [SortTypes.Views, SortTypes.Title, SortTypes.Date]
  public sortDirections = [SortDirections.Ascending, SortDirections.Descending]

  public onSubmit(): void {
    const sortData: SortData = convertRawValueToSortData(this.sortForm.getRawValue())
    this.sortState.changeSortState(sortData)
  }

  public resetForm(): void {
    this.sortState.changeSortState(null)
  }
  constructor(
    private fb: FormBuilder,
    private sortState: SortStateService,
  ) {}
}
