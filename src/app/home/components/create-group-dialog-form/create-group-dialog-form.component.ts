import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'

import { HomeFacade } from '../../home-store/services/home.facade'
import { nameValidators } from 'src/app/shared/constants/forms-validators-sets'

@Component({
  selector: 'cn-create-group-dialog-form',
  templateUrl: './create-group-dialog-form.component.html',
  styleUrls: ['./create-group-dialog-form.component.scss'],
})
export class CreateGroupDialogFormComponent {
  public createGroupForm = this.fb.group({
    newGroupName: ['', nameValidators],
  })

  public newGroupName = this.createGroupForm.controls.newGroupName

  constructor(
    private dialogRef: MatDialogRef<CreateGroupDialogFormComponent>,
    private fb: FormBuilder,
    private homeFacade: HomeFacade,
  ) {}

  public createGroup(): void {
    const newGroupName = this.newGroupName.getRawValue()

    if (newGroupName) {
      this.dialogRef.close()
      this.homeFacade.createNewGroup(newGroupName)
    }
  }
}
