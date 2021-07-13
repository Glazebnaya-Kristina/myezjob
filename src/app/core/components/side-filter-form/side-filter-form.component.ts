import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {COMMA, ENTER} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-side-filter-form',
  templateUrl: './side-filter-form.component.html',
  styleUrls: ['./side-filter-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SideFilterFormComponent implements OnInit {
  public filteredStreets: Observable<string[]>;
  public filteredCategories: Observable<string[]>;
  public streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  public allCategories: string[] = ['Teacher', 'Doctor', 'Dentist', 'Trainer', 'Footballer'];
  public categories: string[] = ['Teacher'];
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public removable = true;

  public categoryControl = new FormControl();
  public control = new FormControl();

  ngOnInit() {
    this.filtersStreets();
    this.filtersCategories();
  }

  private filtersStreets(): void {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map((street: string) => {
        return this.customFilter(street, this.streets);
      })
    );
  }

  private filtersCategories(): void {
    this.filteredCategories = this.categoryControl.valueChanges.pipe(
      startWith(''),
      map((category: string) => {
        return this.customFilter(category, this.allCategories);
      })
    );
  }

  private customFilter(value: string, arr: string[]): string[] {
    let resultStreets = this.filtersAll(value, arr);
    return resultStreets.length ? resultStreets : ['None'];
  }

  private filtersAll(value: string, arr: string[]): string[] {
    let filterValue = value.toLowerCase();
    return arr.filter(itemArr => itemArr[0].toLowerCase().includes(filterValue));
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.categories.push(value);
    }

    event.chipInput.clear();
    this.categoryControl.setValue(null);
  }

  onRemove(category: string): void {
    this.categories = this.categories.filter(item => item !== category);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.push(event.option.viewValue);
    this.categoryControl.setValue(null);
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
