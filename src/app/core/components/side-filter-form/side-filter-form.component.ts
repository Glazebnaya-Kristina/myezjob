import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-side-filter-form',
  templateUrl: './side-filter-form.component.html',
  styleUrls: ['./side-filter-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideFilterFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
