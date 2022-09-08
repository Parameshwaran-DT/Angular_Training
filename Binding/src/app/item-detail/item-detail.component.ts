import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() item = '';
  @Input() modelName = '';
  @Input() inch = '';
}
