import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<h1>Artist Directory</h1>', // cannot multi-line for 'template'. must use back-ticks
  // template:`
  // <h1>Artist Directory</h1>
  // <div>Hello World</div>
  // `,
  // styleUrls: [], // references external style sheets
  styles: [
    `
      .list-group-item:first-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: none;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  query: string;
  artists: object;
  currentArtist: object;

  showArtist(artist) {
    artist.highlight = !artist.highlight;

    this.query = artist.name;
    this.currentArtist = artist;
  }

  constructor(private http: HttpClient) {
    this.query = '';
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe((data) => {
      this.artists = data;
    });
  }
}
