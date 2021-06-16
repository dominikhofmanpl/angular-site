import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service'

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  reviews$

  constructor(public reviewsService: ReviewsService) { }

  ngOnInit(): void {
    this.getReviews()
  }

  getReviews(): void {
    this.reviews$ = this.reviewsService.getReviews()
  }

}
