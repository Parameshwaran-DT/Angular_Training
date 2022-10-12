import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularBasics';
  id = 28;

  constructor(private router: Router,
    private appService: AppService) { }

  ngOnInit(): void {
    // const observable = new Observable(function subscribe(subscriber) {
    //   const id = setInterval(() => {
    //     subscriber.next('hi');
    //   }, 1000);
    // });

    // const subject_test = new Subject();

    // subject_test.subscribe({
    //   next: (v) => console.log(`From Subject : ${v}`)
    // });
    // subject_test.subscribe({
    //   next: (v) => console.log(`From Subject: ${v}`)
    // });
    // subject_test.next("A");
    // subject_test.next("B");
    
  }
}