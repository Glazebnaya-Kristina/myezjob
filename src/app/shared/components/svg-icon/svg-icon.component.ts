import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent implements OnInit {
  @Input() icon: string;
  @Input() width: number;
  @Input() height: number;
  @Input() fill: string;

  constructor() { }

  ngOnInit(): void {
  }

}
