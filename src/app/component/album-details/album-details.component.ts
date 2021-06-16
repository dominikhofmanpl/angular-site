import { Component, OnInit, Input } from '@angular/core';
import { Albums } from 'src/app/data/interfaces/albums';
import { ActivatedRoute } from '@angular/router';
import { FelietonsService } from 'src/app/services/felietons.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  @Input() felieton
  constructor(private route: ActivatedRoute, private felietonsService: FelietonsService) { }

  ngOnInit(): void {
    this.loadFelietonDetail()
  }

  loadFelietonDetail() {
    const felietonId = +this.route.snapshot.paramMap.get('id')
    this.felieton = this.felietonsService.getSingleFelieton(felietonId)
  }

}
