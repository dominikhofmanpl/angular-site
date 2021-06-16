import { Component, OnInit, Input } from '@angular/core';
import { Artist } from 'src/app/data/interfaces/artists';
import { ArtistsService } from 'src/app/services/artists.service';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from 'src/app/services/reviews.service';
import { parse } from 'angular-html-parser';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  @Input()
  review
  constructor(private reviewService: ReviewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadReviewDetail()
  }

  loadReviewDetail() {
    const reviewId = +this.route.snapshot.paramMap.get('id')
    this.review = this.reviewService.getSingleReviews(reviewId)
  }

}
