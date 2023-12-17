import { Injectable } from '@angular/core'
import { interval, map, Subject, take } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private countdown = new Subject<number | null>()

  public countdown$ = this.countdown.asObservable()

  private isCountdownGoing = false

  public startCountdown(): void {
    if (!this.isCountdownGoing) {
      this.isCountdownGoing = true

      interval(1000)
        .pipe(
          map(value => 60 - (value + 1)),
          take(60),
        )
        .subscribe({
          next: value => {
            this.countdown.next(value)
          },
          complete: () => {
            this.isCountdownGoing = false
            this.countdown.next(null)
          },
        })
    }
  }
}
