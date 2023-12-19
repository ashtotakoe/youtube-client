import { Component, Input } from '@angular/core'

import { HomeFacade } from '../../home-store/services/home.facade'
import { User } from '../../models/user.model'

@Component({
  selector: 'cn-users-list-item',
  templateUrl: './users-list-item.component.html',
  styleUrls: ['./users-list-item.component.scss'],
})
export class UsersListItemComponent {
  @Input() public user!: User

  constructor(private homeFacade: HomeFacade) {}

  public createConversation(): void {
    this.homeFacade.createConversation(this.user.uid)
  }
}
