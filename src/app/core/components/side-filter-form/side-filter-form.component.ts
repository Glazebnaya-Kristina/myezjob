import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-side-filter-form',
  templateUrl: './side-filter-form.component.html',
  styleUrls: ['./side-filter-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SideFilterFormComponent implements OnInit {
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public filteredProfession$: Observable<string[]>;
  public filteredCities$: Observable<string[]>;
  public filteredCategories$: Observable<string[]>;
  public professions: string[] = ['Teacher', 'Doctor', 'Dentist', 'Trainer', 'Footballer'];
  public cities: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia'];
  public allCategories: string[] = ['Teacher', 'Doctor', 'Dentist', 'Trainer', 'Footballer'];
  public categories: string[] = ['Teacher'];

  public form: FormGroup;

  get f() {
    return this.form.controls;
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.filterWhere();
    this.filtersStreetsWhat();
    this.filtersCategories();
  }

  initForm(): void {
    this.form = this.fb.group({
      what: [null],
      where: [null],
      category: [null],
    });
  }

  private filtersStreetsWhat(): void {
    this.filteredProfession$ = this.f.what.valueChanges.pipe(
      untilDestroyed(this),
      startWith(''),
      map((profession: string) => {
          return this.customFilter(profession, this.professions)
        }
      ))
  }

  private filterWhere(): void {
    this.filteredCities$ = this.f.where.valueChanges.pipe(
      untilDestroyed(this),
      startWith(''),
      map((city: string) => {
          return this.customFilter(city, this.cities)
        }
      ))
  }

  private filtersCategories(): void {
    this.filteredCategories$ = this.f.category.valueChanges.pipe(
      startWith(''),
      map((category: string) => {
          return this.customFilter(category, this.allCategories)
        }
      ))
  }

  private customFilter(value: string, arr: string[]): string[] {
    if (value !== null) {
      return arr.filter(itemArr => itemArr[0].toLowerCase().includes(value.toLowerCase()));
    }
  }

  onAdd(event: MatChipInputEvent): void {
    let value = (event.value || '').trim();
    value = this.transformUpperCase(value);

    if (!this.categories.includes(value) && value) {
      this.categories.push(value);
    }

    event.chipInput.clear();
    this.f.category.setValue('');
  }

  onRemove(category: string): void {
    this.categories = this.categories.filter(item => item !== category);
  }

  onSelect(event: MatAutocompleteSelectedEvent): void {
    if (!this.categories.includes(event.option.viewValue)) {
      this.categories.push(event.option.viewValue);
    }
    this.f.category.setValue('');
  }

  private transformUpperCase(str): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  onSubmit() {
    //  submit form
  }

  onClear() {
    //  clear field in form
  }

  onCancel() {
    //  cancel fill form
  }

  onReturn() {
    // return to top component
  }
}
