import { Component, OnInit } from '@angular/core';
import { CheckingService } from '../services/checking.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  password: string = '';
  state: number = -1;
  colorListWeak: string[] = ['grey', 'red', 'red', 'yellow', 'green'];
  colorListMedium: string[] = ['grey', 'red', 'grey', 'yellow', 'green'];
  colorListStrong: string[] = ['grey', 'red', 'grey', 'grey', 'green'];

  constructor(private checkingService: CheckingService) {}

  ngOnInit(): void {}

  checkDificulty() {
    if (this.password.length == 0) {
      this.state = 0;
    } else {
      if (this.password.length < 8) {
        this.state = 1;
      } else {
        if (
          this.checkingService.checkSymbols(this.password) ||
          this.checkingService.checkDigits(this.password) ||
          this.checkingService.checkLetters(this.password)
        ) {
          this.state = 2;
        } else if (
          this.checkingService.checkDigitsLetters(this.password) ||
          this.checkingService.checkDigitsSymbols(this.password) ||
          this.checkingService.checkLettersSymbols(this.password)
        ) {
          this.state = 3;
        } else {
          this.state = 4;
        }
      }
    }
  }
}
