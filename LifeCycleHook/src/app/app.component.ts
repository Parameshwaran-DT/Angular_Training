import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit, OnDestroy {

  displayChild = true;

  data = 0

  constructor() {
    console.log('AppComponent:Constructor');
  }

  ngOnChanges(){
    console.log("AppComponent:Onchanges");
  }

  toggle() {
    this.displayChild = !this.displayChild;
  } 

  ngOnInit() {
    console.log('AppComponent:OnInit');
  }


  ngOnDestroy() {
    console.log('AppComponent:OnDestroy');
  }

  changeFromParent(){
    this.data += 1;
  }
}
