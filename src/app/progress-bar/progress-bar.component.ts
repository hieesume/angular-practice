import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor: string = '#9e9e9e';
  @Input() progressColor: string = '#2e8b57';
  @Input() progress = 0;
  constructor() {}
  ngOnInit() {}
}
