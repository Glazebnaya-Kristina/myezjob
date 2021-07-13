import {Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-side-filter-form',
  templateUrl: './side-filter-form.component.html',
  styleUrls: ['./side-filter-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideFilterFormComponent implements OnInit {
  public streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  public filteredStreets: Observable<string[]>;
  public removable = true;
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public filteredCategories: Observable<string[]>;
  public categories: string[] = ['Teacher'];
  public allCategories: string[] = ['Teacher', 'Doctor', 'Dentist', 'Trainer', 'Footballer'];

  public fruitCtrl = new FormControl();
  public control = new FormControl();

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filterStreets(value))
    );
    this.filteredCategories = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((category: string | null) => category ? this._filterCategories(category) : this.allCategories.slice()));
  }

  // private _filter(value: string): string[] {
  //   const filterValue = this._normalizeValue(value);
  //   return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  // }

  // private _normalizeValue(value: string): string {
  //   return value.toLowerCase().replace(/\s/g, '');
  // }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.categories.push(value);
    }

    event.chipInput.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.categories.indexOf(fruit);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filterStreets(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.streets.filter(street => street.toLowerCase().includes(filterValue));
  }

  private _filterCategories(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCategories.filter(category => category.toLowerCase().includes(filterValue));
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
