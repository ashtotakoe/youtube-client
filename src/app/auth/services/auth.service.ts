import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { LocalStorageService } from '../../core/storage/services/local-storage.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserSignedIn$$ = new BehaviorSubject<boolean>(this.isUserSignedIn())
  public isUserSignedIn$ = this.isUserSignedIn$$.asObservable()

  private userEmail$$ = new BehaviorSubject<string | null>(null)
  public userEmail$ = this.userEmail$$.asObservable()

  constructor(private localStorageService: LocalStorageService) {}

  public signIn(email: string): void {
    this.localStorageService.addItem(email)
    this.isUserSignedIn$$.next(true)
    this.userEmail$$.next(email)
  }

  public logOut(): void {
    this.localStorageService.clear()
    this.isUserSignedIn$$.next(false)
    this.userEmail$$.next(null)
  }

  private isUserSignedIn(): boolean {
    return Boolean(this.localStorageService.getItem())
  }
}
