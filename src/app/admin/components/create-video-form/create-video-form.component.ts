import { ChangeDetectionStrategy, Component } from '@angular/core'
import { type AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'

import { VideosFacade } from '../../../core/videos-store/services/videos.facade'
import type { VideoData } from '../../../shared/models/video-data.model'
import { dateValidator } from '../../../shared/validators/date.validator'
import { TagsNumberLimitations } from '../../enums/tags-number-limitations.enum'
import { convertCreateVideoData } from '../../utils/convert-create-video-data'

@Component({
  selector: 'yt-create-video-form',
  templateUrl: './create-video-form.component.html',
  styleUrls: ['./create-video-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateVideoFormComponent {
  public createVideoForm = this.fb.nonNullable.group({
    title: [
      '',
      [
        (control: AbstractControl) => Validators.required(control),
        (control: AbstractControl) => Validators.minLength(3)(control),
        (control: AbstractControl) => Validators.maxLength(20)(control),
      ],
    ],
    description: ['', [(control: AbstractControl) => Validators.maxLength(255)(control)]],
    imageCoverLink: ['', [(control: AbstractControl) => Validators.required(control)]],
    videoLink: ['', [(control: AbstractControl) => Validators.required(control)]],

    creationDate: new FormControl<Date | null>(null, [
      (control: AbstractControl) => Validators.required(control),
      (control: AbstractControl) => dateValidator(control),
    ]),

    tags: this.fb.array<FormControl<string>>([this.createTagFormControl()]),
  })

  public title = this.createVideoForm.controls.title
  public description = this.createVideoForm.controls.description
  public imageCoverLink = this.createVideoForm.controls.imageCoverLink
  public videoLink = this.createVideoForm.controls.videoLink
  public creationDate = this.createVideoForm.controls.creationDate
  public tags = this.createVideoForm.controls.tags

  constructor(
    private fb: FormBuilder,
    private videosFacade: VideosFacade,
    private snackBar: MatSnackBar,
  ) {}

  private createTagFormControl(): FormControl<string> {
    const tagFormControl = this.fb.nonNullable.control('')
    tagFormControl.addValidators((control: AbstractControl) => Validators.required(control))

    return tagFormControl
  }

  public addTag(): void {
    if (this.tags.length < TagsNumberLimitations.Max) {
      const control = this.createTagFormControl()
      this.tags.insert(this.tags.length, control)
    }
  }

  public removeTag(tagIndex: number): void {
    if (this.tags.length !== TagsNumberLimitations.Min) {
      this.tags.removeAt(tagIndex)
    }
  }

  public resetForm(): void {
    this.createVideoForm.reset()
    this.tags.controls = [this.createTagFormControl()]
  }

  public onSubmit(): void {
    const createdVideo: VideoData = convertCreateVideoData(this.createVideoForm.getRawValue())
    this.videosFacade.createVideo(createdVideo)
    this.resetForm()

    this.snackBar.open('Video was created', 'close')
  }
}
