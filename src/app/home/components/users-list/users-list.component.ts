import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core'

import { HomeFacade } from '../../home-store/services/home.facade'
import { CountdownNames } from 'src/app/core/enums/countdown-names.enum'
import { ProfileFacade } from 'src/app/profile/profile-store/services/profile.facade'

@Component({
  selector: 'cn-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  public users$ = this.homeFacade.users$
  public isLoading$ = this.homeFacade.isLoading$
  private profileData$ = this.profileFacade.profileData$

  public countdownName = CountdownNames.RefreshUserList

  constructor(
    private homeFacade: HomeFacade,
    private profileFacade: ProfileFacade,
  ) {}

  public ngOnInit(): void {
    this.homeFacade.loadUsers({ isCashed: true })
  }

  public refreshUsers(): void {
    this.homeFacade.loadUsers({ isCashed: false })
  }
}
