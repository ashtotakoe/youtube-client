import { InjectionToken } from '@angular/core'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const STORAGE_PREFIX = new InjectionToken<string>('storage prefix', {
  providedIn: 'root',
  factory: () => 'cn',
})
