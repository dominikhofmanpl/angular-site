import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  authorsUrl = 'http://neworld.dominikhofman.pl/wordpress/wp-json/wp/v2/users'
  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get(this.authorsUrl)
  }
}
