import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brake-label',
  templateUrl: './brake-label.component.html',
  styleUrls: ['./brake-label.component.css']
})
export class BrakeLabelComponent implements OnInit {

  @Input()

  label: String

  constructor() { }

  ngOnInit(): void {
  }

}
