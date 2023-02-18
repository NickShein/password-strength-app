import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthStateService {
  public state$ = new Subject<number>();

  public changeState(state: number){
    this.state$.next(state);
  }

  constructor() { }
}
