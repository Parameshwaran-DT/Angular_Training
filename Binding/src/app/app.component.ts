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

  currentItem = 'Television';
  model='realme';
  inch='32inch';

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
