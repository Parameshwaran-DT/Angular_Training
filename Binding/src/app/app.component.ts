import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Display the content with one way Data Binding';
  data="Dorustree private Limited";
  fullName: string = "Hello Angular";    
}
