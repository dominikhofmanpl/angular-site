import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private http: HttpClient) { }

  navUrl = 'http://neworld.dominikhofman.pl/wordpress/wp-json/menus/v1/menus/main-menu'

  public getNavOptions(): Observable<Object> {
    return this.http.get(this.navUrl)
  }
}
