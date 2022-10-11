import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  id: number = 28;
  story: string = ''; 
  currentItem = 'Television';


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appService : AppService
  ) { }

  ngOnInit(): void {
    this.appService.subscriber$.subscribe(data => {
      console.log("Data:",data);
    });
  }

  route() {
    this.router.navigate(['/list'], { queryParams: { id: this.id } });
  }

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
