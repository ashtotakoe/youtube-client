import { ChangeDetectionStrategy, Component, EventEmitter, type OnDestroy, type OnInit, Output } from '@angular/core'
import { type AbstractControl, FormBuilder, Validators } from '@angular/forms'
import { debounceTime, distinctUntilChanged, filter, map, Subscription } from 'rxjs'

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
    this.subs.add(
      this.searchForm.valueChanges
        .pipe(
          filter(prompt => prompt !== null && prompt.length >= 3),
          distinctUntilChanged(),
          debounceTime(300),
          map(prompt => prompt?.trim()),
        )
        .subscribe(prompt => {
          if (this.searchForm.valid && prompt) {
            this.searchFormSubmitted.emit(prompt)
          }
        }),
    )

    this.searchForm.setValue('angular')
  }
  public ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
