import { Injectable } from '@angular/core';
import { ARTISTS } from '../data/mocks/mocks-artists'
import { Artist } from '../data/interfaces/artists'
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) { }

  artistsUrl = 'http://neworld.dominikhofman.pl/wordpress/wp-json/wp/v2/artists/'

  public getArtists() {
    return fetch(this.artistsUrl).then(res => res.json())
  }

  public getSingleArtist = (id) => {
    var result = fetch(this.artistsUrl + id).then(res => res.json())
    console.log(result)
    return result
  }
}
