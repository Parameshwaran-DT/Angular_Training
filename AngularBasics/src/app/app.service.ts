import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService {
  observer = new Subject();
  public subscriber$ = this.observer.asObservable();

  emitData(data: unknown) {
    this.observer.next(data);
  }
}