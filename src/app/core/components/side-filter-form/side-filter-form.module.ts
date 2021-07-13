import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideFilterFormComponent} from './side-filter-form.component';
import {SideFilterHeaderModule} from '@app/core/components/side-filter-header/side-filter-header.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {CheckboxModule} from "@app/shared/components/checkbox/checkbox.module";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatRadioModule} from "@angular/material/radio";
import {RadioButtonModule} from "@app/shared/components/radio-button/radio-button.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {SideFilterFooterModule} from "@app/core/components/side-filter-footer/side-filter-footer.module";

@NgModule({
  declarations: [
    SideFilterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SideFilterHeaderModule,
    SideFilterFooterModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    CheckboxModule,
    MatSlideToggleModule,
    MatRadioModule,
    RadioButtonModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatExpansionModule,
  ],
  exports: [
    SideFilterFormComponent
  ]
})

export class SideFilterFormModule {
}
