import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) { }

  aboutPageUrl = environment.wordpressUrl + '/wp-json/wp/v2/pages'

  public getAbout(): Observable<Object> {
    return this.http.get(this.aboutPageUrl)
  }
}
