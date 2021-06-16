import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/data/interfaces/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-newsitem',
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.css']
})
export class NewsitemComponent implements OnInit {

  @Input()
  public news

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
  }

}
