import { Component, OnInit } from '@angular/core';
import { FelietonsService } from 'src/app/services/felietons.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  felietons$

  constructor(private felietonService: FelietonsService) { }

  ngOnInit(): void {
    this.getFelietons()
  }

  getFelietons() {
    this.felietons$ = this.felietonService.getFelietons()
  }

}
