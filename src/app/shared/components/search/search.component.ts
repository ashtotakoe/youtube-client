import { ChangeDetectionStrategy, Component, EventEmitter, type OnDestroy, type OnInit, Output } from '@angular/core'
import { type AbstractControl, FormBuilder, Validators } from '@angular/forms'
import { distinctUntilChanged, startWith, Subscription } from 'rxjs'

@Component({
  selector: 'yt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() public searchFormSubmitted = new EventEmitter<string>()
  public searchForm = this.fb.control<string>('', [
    Validators.minLength(3),
    (control: AbstractControl) => Validators.required(control),
  ])

  private subs: Subscription = new Subscription()

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.subs.add(this.searchForm.valueChanges.pipe(startWith(''), distinctUntilChanged()).subscribe())

    this.searchForm.setValue('angular')
    this.onSubmit()
  }

  public onSubmit(): void {
    if (this.searchForm.valid && typeof this.searchForm.value === 'string') {
      this.searchFormSubmitted.emit(this.searchForm.value)
    }
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
