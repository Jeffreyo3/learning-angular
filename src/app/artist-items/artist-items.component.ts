import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html',
})
export class ArtistItemsComponent {
  @Input() artist: any;
}
