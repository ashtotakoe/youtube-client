import { Injectable } from '@angular/core'
import { interval, map, ReplaySubject, take } from 'rxjs'

export class Countdown {
  private countdown$$ = new ReplaySubject<number | null>(1)
  public countdown$ = this.countdown$$.asObservable()

  private isCountdownGoing = false
  public startCountdown(): void {
    if (!this.isCountdownGoing) {
      this.isCountdownGoing = true

      const subscription = interval(1000)
        .pipe(
          map(value => 60 - value),
          take(61),
        )
        .subscribe({
          next: value => {
            this.countdown$$.next(value)
          },
          complete: () => {
            this.isCountdownGoing = false
            subscription.unsubscribe()
            this.countdown$$.next(null)
          },
        })
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private countdownMap: Record<string, Countdown> = {}

  public addCountdownOrGetExisting(key: string): Countdown {
    if (this.countdownMap[key]) {
      return this.countdownMap[key]
    }

    this.countdownMap = {
      ...this.countdownMap,
      [key]: new Countdown(),
    }

    return this.countdownMap[key]
  }

  public getCountdown(key: string): Countdown | null {
    return this.countdownMap[key] ?? null
  }
}
