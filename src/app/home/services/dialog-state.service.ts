import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable()
export class DialogStateService {
  private dialogClose$$ = new Subject<boolean>()
  public dialogClose$ = this.dialogClose$$.asObservable()

  public closeDialog(): void {
    this.dialogClose$$.next(true)
  }
}
