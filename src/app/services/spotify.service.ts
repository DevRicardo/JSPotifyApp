import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor( private http: HttpClient) { }

  getQuery(query: String) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBAqA5HydhY9Zw5p3NMSY5b6hgVDTR0WtStwDc5OZPcvSTJR4MkRB8JwGqha8Z23H2I4JmnhMENyWRZmjI'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data =>  data['albums'].items ));
  }

  getArtists( termino: string) {

    return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=20`)
              .pipe( map( data => data['artists'].items ));

  }
}
