import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { MatCardModule } from '@angular/material/card'

import { CustomButtonComponent } from '../../../shared/components/custom-button/custom-button.component'
import { FavoriteButtonComponent } from '../../../shared/components/favorite-button/favorite-button.component'
import type { Snippet } from '../../../shared/models/snippet.model'
import type { VideoData } from '../../../shared/models/video-data.model'
import { CustomColorBarDirective } from '../../directives/custom-color-bar.directive'
import { VideoStatisticsComponent } from '../video-statistics/video-statistics.component'
import { VideoComponent } from './video.component'

describe('VideoComponent', () => {
  let component: VideoComponent
  let fixture: ComponentFixture<VideoComponent>
  const mockedSnippet: Snippet = {
    publishedAt: '2020-09-09T17:54:21Z',
    channelId: 'UCsBjURrPoezykLs9EqgamOA',
    title: 'Angular in 100 Seconds',
    description: 'Angular ',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/Ata9cSC2WpM/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/Ata9cSC2WpM/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/Ata9cSC2WpM/hqdefault.jpg',
        width: 480,
        height: 360,
      },
      standard: {
        url: 'https://i.ytimg.com/vi/Ata9cSC2WpM/sddefault.jpg',
        width: 640,
        height: 480,
      },
      maxres: {
        url: 'https://i.ytimg.com/vi/Ata9cSC2WpM/maxresdefault.jpg',
        width: 1280,
        height: 720,
      },
    },
    tags: ['webdev'],
    categoryId: '28',
    liveBroadcastContent: 'none',
    localized: {
      title: 'Angular in 100 Seconds',
      description: 'Angular',
    },
    defaultAudioLanguage: 'en',
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoComponent, VideoStatisticsComponent, CustomColorBarDirective],
      imports: [MatCardModule, CustomButtonComponent, FavoriteButtonComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(VideoComponent)
    component = fixture.componentInstance
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    component.video = {
      snippet: mockedSnippet,
    } as VideoData

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
