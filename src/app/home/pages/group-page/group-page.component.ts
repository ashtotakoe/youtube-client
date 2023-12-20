import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { combineLatest, filter, take } from 'rxjs'

import { HomeFacade } from '../../home-store/services/home.facade'
import { ProfileFacade } from 'src/app/profile/profile-store/services/profile.facade'

@Component({
  selector: 'cn-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupPageComponent implements OnInit {
  public currentChat$ = this.homeFacade.currentChat$

  constructor(
    private homeFacade: HomeFacade,
    private route: ActivatedRoute,
    private profileFacade: ProfileFacade,
  ) {}

  public ngOnInit(): void {
    const groupId = this.route.snapshot.paramMap.get('id')

    if (groupId) {
      this.profileFacade.loadProfileData()
      this.homeFacade.loadGroups({ isCashed: true })

      combineLatest([this.homeFacade.groups$, this.profileFacade.profileData$])
        .pipe(
          filter(([groups]) => groups.length > 0),
          take(1),
        )
        .subscribe(() => {
          this.homeFacade.loadGroupChat(groupId)
        })
    }
  }
}
