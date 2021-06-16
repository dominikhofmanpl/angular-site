import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors$

  constructor(private authorsService: AuthorsService) { }

  ngOnInit(): void {
    this.authors$ = fetch('http://neworld.dominikhofman.pl/wordpress/wp-json/wp/v2/users/').then(res => res.json())
  }

  public getUsers() {
    this.authors$ = this.authorsService.getUsers()
  }

}
