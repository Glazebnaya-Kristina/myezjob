import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonComponent implements OnInit {
  @Input() value: string;
  @Input() valueId: string;
  @Input() amount: string;
  @Input() checked: boolean;
  @Input() disabled: any;

  constructor() { }

  ngOnInit(): void {
  }

}
