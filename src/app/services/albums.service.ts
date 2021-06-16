import { Injectable } from '@angular/core';
import { ALBUMS } from '../data/mocks/mocks-albums'
import { Albums } from '../data/interfaces/albums'
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  albumsUrl = 'http://neworld.dominikhofman.pl/wordpress/wp-json/wp/v2/albums/'

  public getAlbums(): Observable<Object> {
    return this.http.get(this.albumsUrl)
  }

  public getSingleAlbum = (id) => {
    var result = fetch(this.albumsUrl + id).then(res => res.json())
    console.log(result)
    return result
  }
}
