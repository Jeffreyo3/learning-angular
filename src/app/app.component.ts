import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<h1>Artist Directory</h1>', // cannot multi-line for 'template'. must use back-ticks
  // template:`
  // <h1>Artist Directory</h1>
  // <div>Hello World</div>
  // `,
  styleUrls: []
})
export class AppComponent {
  title = 'Learning Angular';
}