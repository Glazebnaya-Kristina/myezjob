import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-side-filter-header',
  templateUrl: './side-filter-header.component.html',
  styleUrls: ['./side-filter-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideFilterHeaderComponent implements OnInit {
  @Input() title: string;
  @Output() cleared = new EventEmitter<any>();
  @Output() returned = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClear() {
    this.cleared.emit();
  }

  onReturn() {
    this.returned.emit();
  }
}
