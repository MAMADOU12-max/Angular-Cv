import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-wall-tech-cv';
  bgcolor = 'blue';
  show = false ;

  changeStatus() {
    this.show = !this.show ;
  }
}
