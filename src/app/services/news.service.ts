import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  newsUrl = 'http://neworld.dominikhofman.pl/wordpress/wp-json/wp/v2/news/'
  newsHeaderUrl = 'http://neworld.dominikhofman.pl/wordpress/wp-json/wp/v2/news?per_page=1'

  public getNews() {
    var result = fetch(this.newsUrl).then(res => res.json())
    return result
  }

  public getNewsDetail = (id) => {
    var result = fetch(this.newsUrl + id).then(res => res.json())
    return result
  }

  public getNewsHeaderUrl() {
    var result = fetch(this.newsHeaderUrl).then(res => res.json())
    return result
  }
  
}
