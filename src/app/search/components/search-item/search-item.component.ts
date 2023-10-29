import { Component, Input, type OnChanges, type SimpleChanges } from '@angular/core'

import { SearchItem } from '../../../shared/models/search-item.model'

@Component({
  selector: 'yt-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnChanges {
  @Input() public displayData?: SearchItem

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['displayData'].currentValue)
  }
}
