import { InjectionToken } from '@angular/core'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const LOCAL_STORAGE_KEY = new InjectionToken('local storage key', {
  providedIn: 'root',
  factory: () => 'youtube-user',
})
