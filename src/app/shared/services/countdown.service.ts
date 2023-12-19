import { Injectable } from '@angular/core'
import { interval, map, ReplaySubject, type Subscription, take } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private countdown$$ = new ReplaySubject<number | null>(1)

  public countdown$ = this.countdown$$.asObservable()

  private isCountdownGoing = false
  private subscription: Subscription | undefined

  public startCountdown(): void {
    if (!this.isCountdownGoing) {
      this.isCountdownGoing = true

      this.subscription = interval(1000)
        .pipe(
          map(value => 60 - (value + 1)),
          take(60),
        )
        .subscribe({
          next: value => {
            this.countdown$$.next(value)
          },
          complete: () => {
            this.isCountdownGoing = false
            this.subscription?.unsubscribe()
            this.countdown$$.next(null)
          },
        })
    }
  }
}
