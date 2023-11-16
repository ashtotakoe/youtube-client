import { Injectable } from '@angular/core'

const LOCAL_STORAGE_KEY = 'youtube-user'

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public addItem(item: string): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, item)
  }

  public getItem(): string | null {
    return localStorage.getItem(LOCAL_STORAGE_KEY)
  }

  public clear(): void {
    localStorage.clear()
  }
}
