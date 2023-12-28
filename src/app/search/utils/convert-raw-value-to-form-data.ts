import type { SortData } from '../../shared/models/sort-data.model'
import { DefaultSortFormData } from '../enums/default-sort-form-data.enum'
import type { BaseWithNull } from '../types/base-with-null.type'

export const convertRawValueToSortData = ({ type, direction }: BaseWithNull<SortData>): SortData => ({
  type: type ?? DefaultSortFormData.Type,
  direction: direction ?? DefaultSortFormData.Direction,
})
