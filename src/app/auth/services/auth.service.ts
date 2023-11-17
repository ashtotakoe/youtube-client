import { Inject, Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { LocalStorageService } from '../../core/storage/services/local-storage.service'
import { LOCAL_STORAGE_KEY } from '../../core/storage/tokens/local-storage-key.token'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserSignedIn$$ = new BehaviorSubject<boolean>(Boolean(this.getUserEmail()))
  public isUserSignedIn$ = this.isUserSignedIn$$.asObservable()

  private userEmail$$ = new BehaviorSubject<string | null>(this.getUserEmail())
  public userEmail$ = this.userEmail$$.asObservable()

  constructor(
    private localStorageService: LocalStorageService,
    @Inject(LOCAL_STORAGE_KEY) private localStorageKey: string,
  ) {}

  public signIn(email: string): void {
    this.localStorageService.addItem(email)
    this.isUserSignedIn$$.next(true)
    this.userEmail$$.next(email)
  }

  public logOut(): void {
    this.localStorageService.removeItem(this.localStorageKey)
    this.isUserSignedIn$$.next(false)
    this.userEmail$$.next(null)
  }

  private getUserEmail(): string | null {
    return this.localStorageService.getItem()
  }
}
