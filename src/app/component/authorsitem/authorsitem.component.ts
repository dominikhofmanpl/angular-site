import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-authorsitem',
  templateUrl: './authorsitem.component.html',
  styleUrls: ['./authorsitem.component.css']
})
export class AuthorsitemComponent implements OnInit {
  @Input()
  public author

  constructor() { }

  ngOnInit(): void {
  }

}
