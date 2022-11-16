import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollRestoreService {
  private position: number = 0;
  private position$ = new BehaviorSubject(this.position);


  constructor() { }

setPosition(y: number){
  this.position = y;
  this.position$.next(this.position);
}

get scrollPosition(){
  return this.position$.value;
}

}
