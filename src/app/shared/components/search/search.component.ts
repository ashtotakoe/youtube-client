import { ChangeDetectionStrategy, Component, EventEmitter, type OnDestroy, type OnInit, Output } from '@angular/core'
import { type AbstractControl, UntypedFormBuilder, type UntypedFormControl, Validators } from '@angular/forms'
import { distinctUntilChanged, startWith, Subscription, tap } from 'rxjs'

@Component({
  selector: 'yt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() public searchFormSubmitted = new EventEmitter<string>()
  public form: UntypedFormControl = this.fb.control(null, [
    Validators.minLength(3),
    (control: AbstractControl) => Validators.required(control),
  ])

  private subs: Subscription = new Subscription()

  constructor(private fb: UntypedFormBuilder) {}

  public ngOnInit(): void {
    this.subs.add(this.form.valueChanges.pipe(startWith(''), distinctUntilChanged()).subscribe())
    this.form.setValue('angular')
    this.onSubmit()
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this.searchFormSubmitted.emit(this.form.value as string)
    }
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
