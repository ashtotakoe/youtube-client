import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

import { SnackBarMessages } from '../../shared/enums/snack-bar-messages.enum'

@Injectable({
  providedIn: 'root',
})
export class MatSnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  public showCustomMessage(message: string): void {
    this.snackBar.open(message, SnackBarMessages.Close)
  }
}
