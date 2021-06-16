import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-label-temp',
  templateUrl: './main-label-temp.component.html',
  styleUrls: ['./main-label-temp.component.css']
})
export class MainLabelTempComponent implements OnInit {

  @Input()
  title: String

  @Input()
  content: String

  constructor() { }

  ngOnInit(): void {
  }

}
