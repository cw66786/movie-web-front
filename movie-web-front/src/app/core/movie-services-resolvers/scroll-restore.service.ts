import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollRestoreService {
  private position: any = {};
  private position$ = new BehaviorSubject(this.position);


  constructor() { }

setPosition(name: string,x: number,y: number){
  this.position[name] = [x,y];
  this.position$.next(this.position);
}

get scrollPosition(){
  return this.position$.value;
}

}
