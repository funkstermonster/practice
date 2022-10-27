import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';

  counter: number = 0

  name = "";
  bornDate = "";


  receiveCounterData(num: number) {
    this.counter = num
  }

}
