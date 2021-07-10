import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-jobseeker-home-page',
  templateUrl: './jobseeker-home-page.component.html',
  styleUrls: ['./jobseeker-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobseekerHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
