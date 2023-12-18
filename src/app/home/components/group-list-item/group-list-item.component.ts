import { Component, Input } from '@angular/core'

import { HomeFacade } from '../../home-store/services/home.facade'
import { Group } from '../../models/group.model'

@Component({
  selector: 'cn-group-list-item',
  templateUrl: './group-list-item.component.html',
  styleUrls: ['./group-list-item.component.scss'],
})
export class GroupListItemComponent {
  @Input() public group!: Group

  public isConfirmationOpened = false

  constructor(private homeFacade: HomeFacade) {}

  public toggleConfirmation(): void {
    this.isConfirmationOpened = !this.isConfirmationOpened
  }

  public deleteGroup(): void {
    this.homeFacade.deleteGroup(this.group.id)
  }
}
