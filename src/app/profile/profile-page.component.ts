import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core'
import { combineLatest, map, tap } from 'rxjs'

import { ProfileFacade } from './profile-store/services/profile.facade'

@Component({
  selector: 'cn-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent implements OnInit {
  private profileData$ = this.profileFacade.profileData$
  public isLoading$ = this.profileFacade.isLoading$

  public facadeData$ = combineLatest([this.profileData$, this.isLoading$]).pipe(
    tap(([, isLoading]) => {
      if (!isLoading) {
        this.isEditing = false
      }
    }),
    map(([profileData, isLoading]) => ({ profileData, isLoading })),
  )

  public isEditing = false
  public userName = ''

  constructor(private profileFacade: ProfileFacade) {}

  public ngOnInit(): void {
    this.profileFacade.loadProfileData()
  }

  public toggleEdit(name?: string): void {
    if (name) {
      this.userName = name
    }

    this.isEditing = !this.isEditing
  }

  public changeName(): void {
    this.profileFacade.changeUserName(this.userName)
  }

  public logOut(): void {
    this.profileFacade.logOut()
  }
}
