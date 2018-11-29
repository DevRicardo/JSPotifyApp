import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;
  constructor(
    private router: ActivatedRoute, 
    private spotify: SpotifyService) {

    this.loading = true;
    this.router.params.subscribe(
      params => {
        let id = params['id'];
        this.getArtist(id);
        this.getTopTracks(id);
      }
    );

  }

  ngOnInit() {
  }


  getArtist(id: string) {    
    this.spotify.getArtist(id).subscribe(
      (data) => {
        this.artist = data;
        this.loading = false;
      }
    );
  }

  getTopTracks( id: string) {
    this.spotify.getTopTracks(id).subscribe(
      (data) => {
        console.log(data);
        this.topTracks = data;
      }
    );
  }

}
