import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements OnInit {
  @Input() value: string;
  @Input() amount: string;
  @Input() disabled: any;
  @Input() checked: boolean;

  constructor() { }

  ngOnInit(): void {}

}
