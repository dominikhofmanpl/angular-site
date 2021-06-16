import { Component, OnInit, Input } from '@angular/core';
import { Albums } from 'src/app/data/interfaces/albums';
import { AlbumsService } from 'src/app/services/albums.service';
import { FelietonsService } from 'src/app/services/felietons.service';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {

  @Input()
  public felieton

  constructor(private felietonService: FelietonsService) { }

  ngOnInit(): void {
  }

}
