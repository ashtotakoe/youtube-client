import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { filter, map, take } from 'rxjs'

import { HomeFacade } from '../../home-store/services/home.facade'
import type { Group } from '../../models/group.model'
import { CreateGroupDialogFormComponent } from '../create-group-dialog-form/create-group-dialog-form.component'
import { CountdownNames } from 'src/app/core/enums/countdown-names.enum'
import { ProfileFacade } from 'src/app/profile/profile-store/services/profile.facade'

@Component({
  selector: 'cn-group-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupListComponent implements OnInit {
  public groups$ = this.homeFacade.groups$.pipe()
  public profileData$ = this.profileFacade.profileData$

  public countDownName = CountdownNames.RefreshGroupList
  constructor(
    private homeFacade: HomeFacade,
    private profileFacade: ProfileFacade,
    private dialog: MatDialog,
  ) {}

  public refreshGroups(): void {
    this.homeFacade.loadGroups({ isCashed: false })
  }

  public trackById(index: number, group: Group): string {
    return group.id
  }

  public openCreateGroupDialog(): void {
    this.dialog.open(CreateGroupDialogFormComponent)
  }

  public ngOnInit(): void {
    this.profileFacade.loadProfileData()
    this.profileData$
      .pipe(
        filter(profileData => profileData !== null),
        map(() => {
          this.homeFacade.loadGroups({ isCashed: true })
        }),
        take(1),
      )
      .subscribe()
  }
}
