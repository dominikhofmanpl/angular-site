import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/data/interfaces/news';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  @Input()
  news

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNewsDetail()
  }

  getNewsDetail() {
    const id = this.route.snapshot.paramMap.get('id')
    this.news = this.newsService.getNewsDetail(id)
    console.log(id)
  }


}
