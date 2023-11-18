import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'yt-create-video-form',
  templateUrl: './create-video-form.component.html',
  styleUrls: ['./create-video-form.component.scss'],
})
export class CreateVideoFormComponent {
  public createVideoForm = this.fb.group({})

  constructor(private fb: FormBuilder) {}
}
