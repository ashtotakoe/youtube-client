import { ChangeDetectionStrategy, Component, type OnDestroy, type OnInit } from '@angular/core'
import { type AbstractControl, UntypedFormBuilder, type UntypedFormControl, Validators } from '@angular/forms'
import { distinctUntilChanged, startWith, Subscription, tap } from 'rxjs'

@Component({
  selector: 'yt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy {
  public form: UntypedFormControl = this.fb.control(null, [
    Validators.minLength(3),
    (control: AbstractControl) => Validators.required(control),
  ])

  private subs: Subscription = new Subscription()

  constructor(private fb: UntypedFormBuilder) {}

  public ngOnInit(): void {
    this.subs.add(this.form.valueChanges.pipe(startWith(''), distinctUntilChanged(), tap(console.log)).subscribe())
  }

  public onSubmit(): void {
    if (this.form.valid) {
      console.log('form submitted')
    }
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
