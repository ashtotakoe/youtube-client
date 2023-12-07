import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root',
})
export class MatSnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  public showPageNotFoundMessage(): void {
    this.snackBar.open('Page not found', 'close')
  }

  public showCustomMessage(message: string): void {
    this.snackBar.open(message, 'close')
  }
}
