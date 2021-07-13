import {Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-side-filter-footer',
  templateUrl: './side-filter-footer.component.html',
  styleUrls: ['./side-filter-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SideFilterFooterComponent implements OnInit {
  @Output() submitted = new EventEmitter<any>();
  @Output() canceled = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted.emit();
  }

  onCancel() {
    this.canceled.emit();
  }
}
