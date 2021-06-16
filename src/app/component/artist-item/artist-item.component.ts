import { Component, OnInit, Input } from '@angular/core';
import { Artist } from 'src/app/data/interfaces/artists';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['./artist-item.component.css']
})
export class ArtistItemComponent implements OnInit {
  @Input()
  public reviews

  constructor() { }

  ngOnInit(): void {
  }

}
