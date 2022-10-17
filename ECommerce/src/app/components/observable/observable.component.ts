import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  title = "Observable Example";

  divisibleByThreeObservable: Observable<{ isDivisibleByThree: false, number: 0 }> | undefined;

  firstSubscription: Subscription | undefined;

  subscriberOneValue: number = 0;

  isSubscriberOneDivisible!: boolean;

  ngOnInit(): void {
    this.divisibleByThreeObservable = Observable.create((observer:any ) => {
      let number = 0;
      setInterval(() => {
        if (number % 3 === 0) {
          observer.next({ isDivisibleByThree: true, number: number });
        } else {
          observer.next({ isDivisibleByThree: false, number: number });
        }
        number++;

      }, 500);
    });
  }

  subscribe() {
    this.firstSubscription=  
    this.divisibleByThreeObservable ?.subscribe({
        next: (value) => {
          console.log(`Subscriber 1-Number : ${value.number} ${value.isDivisibleByThree ? 'is' : 'is not'} divisible by three.`);
          this.subscriberOneValue = value.number;
          this.isSubscriberOneDivisible = value.isDivisibleByThree;
        }
      });
  }

  unsubscribe() {
    this.firstSubscription?.unsubscribe();
    console.log("subscriber unscbscribed from the onservable.");
  }
}
