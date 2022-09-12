import { Component, OnInit, OnDestroy, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnDestroy{

  constructor() {
    console.log('ChildComponent:Constructor');
  }

  @Input() parentData: any;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ChildComponent:OnInit');
  }

  ngOnDestroy() {
    console.log('ChildComponent:OnDestroy');
  }

  changeFromChild(){
    this.parentData -= 1;
  }

}
