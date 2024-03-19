import { InjectionToken } from '@angular/core'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const YOUTUBE_PLAYER_API = new InjectionToken<string>('youtube player api', {
  providedIn: 'root',
  factory: () => 'https://www.youtube.com/embed/',
})
