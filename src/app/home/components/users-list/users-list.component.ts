import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core'

import { HomeFacade } from '../../home-store/services/home.facade'

@Component({
  selector: 'cn-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  public users$ = this.homeFacade.users$

  constructor(private homeFacade: HomeFacade) {}

  public ngOnInit(): void {
    this.homeFacade.loadUsers({ isCashed: true })
  }
}
