import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-button-spotify',
  templateUrl: './main-button-spotify.component.html',
  styleUrls: ['./main-button-spotify.component.css']
})
export class MainButtonSpotifyComponent implements OnInit {

  @Input()
  label: String
  
  constructor() { }

  ngOnInit(): void {
  }

}
