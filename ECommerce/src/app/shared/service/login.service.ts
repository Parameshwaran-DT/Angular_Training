import { Injectable, OnInit } from '@angular/core';
import { Observable, range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$: Observable<number> = range(0, 10);
    source$.pipe(
      map(x => x * 2),
      filter(x => x % 3 === 0)
    ).subscribe(x => console.log(x));

  }
}
