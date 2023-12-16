import { InjectionToken } from '@angular/core'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const LOCAL_STORAGE = new InjectionToken<Storage>('local storage', {
  providedIn: 'root',
  factory: () => localStorage,
})
