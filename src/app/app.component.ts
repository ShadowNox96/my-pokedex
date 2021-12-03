import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person = {
    name: 'Emanuel',
    age: 24
  }
  names: string[] = ['Emanuel', 'Julian', 'Pedro'];
}
