import { Inject, Injectable, Optional } from '@angular/core'

import { LocalStorageKeys } from '../enums/local-storage-keys.enum'
import { LOCAL_STORAGE } from '../tokens/local-storage.token'
import { STORAGE_PREFIX } from '../tokens/storage-prefix.token'
import type { UserPrivateCredentials } from 'src/app/shared/models/user-private-credentials.model'

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(
    @Inject(LOCAL_STORAGE) private readonly storage: Storage,
    @Optional() @Inject(STORAGE_PREFIX) private readonly prefix: string | null,
  ) {}

  private addPrefix(key: string): string {
    if (this.prefix) {
      return `${this.prefix}-${key}`
    }

    return key
  }

  public clear(): void {
    this.storage.clear()
  }

  public getItem(key: string): string | null {
    return this.storage.getItem(this.addPrefix(key))
  }

  public removeItem(key: string): void {
    this.storage.removeItem(this.addPrefix(key))
  }

  public setItem<T>(key: string, value: string | T): void {
    this.storage.setItem(this.addPrefix(key), typeof value === 'string' ? value : JSON.stringify(value))
  }

  public setPrivateCredentials(value: UserPrivateCredentials): void {
    this.setItem(LocalStorageKeys.PrivateCredentials, JSON.stringify(value))
  }

  public getPrivateCredentials(): UserPrivateCredentials | null {
    const credentials = this.getItem(LocalStorageKeys.PrivateCredentials)

    return credentials ? (JSON.parse(credentials) as UserPrivateCredentials) : null
  }
}
