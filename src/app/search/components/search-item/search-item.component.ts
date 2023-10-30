import { Component, Input } from '@angular/core'

import { SearchItem } from '../../../shared/models/search-item.model'

@Component({
  selector: 'yt-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() public displayData?: SearchItem
}
