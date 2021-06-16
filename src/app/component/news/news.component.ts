import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from '../../data/interfaces/news'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news$

  constructor(public newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews()
  }

  getNews() {
    this.news$ = this.newsService.getNews()
  }
}
