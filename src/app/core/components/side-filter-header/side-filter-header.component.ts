import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-side-filter-header',
  templateUrl: './side-filter-header.component.html',
  styleUrls: ['./side-filter-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideFilterHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
