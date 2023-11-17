import { Inject, Injectable } from '@angular/core'

import { LOCAL_STORAGE_KEY } from '../tokens/local-storage-key.token'

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(LOCAL_STORAGE_KEY) private localStorageKey: string) {}
  public addItem(item: string): void {
    localStorage.setItem(this.localStorageKey, item)
  }

  public getItem(): string | null {
    return localStorage.getItem(this.localStorageKey)
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key)
  }
}
