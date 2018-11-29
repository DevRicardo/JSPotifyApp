import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newMusic: any[] = [];

  constructor( private spotify: SpotifyService) {

    /*
      https://accounts.spotify.com/api/token

      grant_type:client_credentials
      client_id:e3d3e0eeeb2a48688069e49fa883b7a7
      client_secret:f824de24dd18474c8378235817479003
    */

    this.spotify.getNewReleases()
      .subscribe(
        (data: any) => {
          this.newMusic = data;
        }
      );

   }

  ngOnInit() {
  }

}
