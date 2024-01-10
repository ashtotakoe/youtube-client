import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

import { HomeFacade } from '../../home-store/services/home.facade'
import type { Group } from '../../models/group.model'
import { CreateGroupDialogFormComponent } from '../create-group-dialog-form/create-group-dialog-form.component'
import { CountdownNames } from 'src/app/core/enums/countdown-names.enum'

@Component({
  selector: 'cn-group-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupListComponent implements OnInit {
  public groups$ = this.homeFacade.groups$
  public isLoading$ = this.homeFacade.isLoading$

  public countDownName = CountdownNames.RefreshGroupList

  constructor(
    private homeFacade: HomeFacade,
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
    this.homeFacade.loadGroups({ isCashed: true })
  }
}
