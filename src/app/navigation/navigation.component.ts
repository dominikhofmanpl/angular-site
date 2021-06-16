import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service'
import { NAVOPTIONS } from '../data/mocks/mocks-navoptions'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navs$ = NAVOPTIONS

  constructor(private navService: NavigationService) { }

  ngOnInit(): void {
    
  }
}
