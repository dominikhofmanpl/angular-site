import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  reviewsUrl = 'http://neworld.dominikhofman.pl/wordpress/wp-json/wp/v2/reviews/'

  public getReviews(): Observable<Object> {
    return this.http.get(this.reviewsUrl)
  }

  public getSingleReviews = (id) => {
    var result = fetch(this.reviewsUrl + id).then(res => res.json())
    console.log(result)
    return result
  }
}
