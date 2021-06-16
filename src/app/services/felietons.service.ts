import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FelietonsService {

  constructor(private http: HttpClient) { }

  felietonsUrl = environment.wordpressUrl + 'wp-json/wp/v2/felietons/'

  public getFelietons(): Observable<Object> {
    return this.http.get(this.felietonsUrl)
  }

  public getSingleFelieton = (id) => {
    var result = fetch(this.felietonsUrl + id).then(res => res.json())
    console.log(result)
    return result
  }
}
