import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core'

import { HomeFacade } from '../../home-store/services/home.facade'
import { CountdownNames } from 'src/app/core/enums/countdown-names.enum'

@Component({
  selector: 'cn-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  public users$ = this.homeFacade.users$
  public isLoading$ = this.homeFacade.isLoading$

  public countdownName = CountdownNames.RefreshUserList

  constructor(private homeFacade: HomeFacade) {}

  public refreshUsers(): void {
    this.homeFacade.loadUsers({ isCashed: false })
  }

  public ngOnInit(): void {
    this.homeFacade.loadUsers({ isCashed: true })
  }
}
