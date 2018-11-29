import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  viewArtist(item: any) {

    let artistId;

    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    console.log(artistId);
  }

}
