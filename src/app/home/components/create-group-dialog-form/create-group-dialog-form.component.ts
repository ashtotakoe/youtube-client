import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { take } from 'rxjs'

import { HomeFacade } from '../../home-store/services/home.facade'
import { DialogStateService } from '../../services/dialog-state.service'
import { nameValidators } from 'src/app/shared/constants/forms-validators-sets'

@Component({
  selector: 'cn-create-group-dialog-form',
  templateUrl: './create-group-dialog-form.component.html',
  styleUrls: ['./create-group-dialog-form.component.scss'],
})
export class CreateGroupDialogFormComponent {
  public isLoading$ = this.homeFacade.isLoading$

  public createGroupForm = this.fb.group({
    newGroupName: ['', nameValidators],
  })

  public newGroupName = this.createGroupForm.controls.newGroupName

  constructor(
    private dialogRef: MatDialogRef<CreateGroupDialogFormComponent>,
    private fb: FormBuilder,
    private homeFacade: HomeFacade,
    private dialogStateService: DialogStateService,
  ) {}

  public createGroup(): void {
    const newGroupName = this.newGroupName.getRawValue()

    if (newGroupName) {
      this.homeFacade.createNewGroup(newGroupName)

      this.dialogStateService.dialogClose$.pipe(take(1)).subscribe(() => {
        this.dialogRef.close()
      })
    }
  }
}
