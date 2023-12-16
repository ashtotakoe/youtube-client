import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root',
})
export class MatSnackBarService {
  constructor(private matSnackBar: MatSnackBar) {}

  public open(message: string): void {
    this.matSnackBar.open(message)
  }
}
