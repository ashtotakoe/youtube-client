import { Component, Input } from '@angular/core'

import { Group } from '../../models/group.model'

@Component({
  selector: 'cn-group-list-item',
  templateUrl: './group-list-item.component.html',
  styleUrls: ['./group-list-item.component.scss'],
})
export class GroupListItemComponent {
  @Input() public group!: Group
}
