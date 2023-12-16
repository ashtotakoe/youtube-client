import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core'

import { ProfileFacade } from './profile-store/services/profile.facade'

@Component({
  selector: 'cn-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent implements OnInit {
  public profileData$ = this.profileFacade.profileData$

  constructor(private profileFacade: ProfileFacade) {}

  public ngOnInit(): void {
    this.profileFacade.loadProfileData()
  }
}
