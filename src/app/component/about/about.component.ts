import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about$
  constructor(public aboutService: AboutService) { }

  ngOnInit(): void {
    this.getAbout()
  }

  getAbout() {
    this.about$ = this.aboutService.getAbout()
  }

}
