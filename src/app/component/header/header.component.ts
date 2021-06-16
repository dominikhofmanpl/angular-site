import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  newsHeader$
  
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsHeader$ = fetch('http://neworld.dominikhofman.pl/wordpress/wp-json/wp/v2/news?per_page=1').then(res => res.json())
  }
}
