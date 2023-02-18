import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PasswordStrengthStateService } from 'src/app/services/password-strength-state.service';
import { CheckingService } from '../services/checking.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFormComponent implements OnInit, OnDestroy {
  colorListWeak: string[] = ['grey', 'red', 'red', 'yellow', 'green'];
  colorListMedium: string[] = ['grey', 'red', 'grey', 'yellow', 'green'];
  colorListStrong: string[] = ['grey', 'red', 'grey', 'grey', 'green'];

  state: number = -1;
  subs!: Subscription;

  formGroup = new FormGroup({
    userPassword: new FormControl('')
  });

  get passwordValue(){
    return this.formGroup.controls['userPassword'].value as string;
  }

  constructor(private passwordStrengthService: PasswordStrengthStateService, private checkingService: CheckingService) {}

  public onKeyupPasswordInput():void{
    this.isEmptyPassword();
    this.isShortPassword();
    this.isEasyPassword();
    this.isMediumPassword();
    this.isStrongPassword();
    this.changePasswordStateStatus();

  }

  private isEmptyPassword(): boolean{

    if (this.passwordValue.length == 0){
      this.state = 0;
      return true;
    }

    return false;
  }

  private isShortPassword():boolean {

    if (this.passwordValue.length < 8 && this.passwordValue.length != 0){
      this.state = 1;
      return true;
    }

    return false;
  }

  private isEasyPassword():boolean {

    if (
      this.checkingService.checkSymbols(this.passwordValue) ||
      this.checkingService.checkDigits(this.passwordValue) ||
      this.checkingService.checkLetters(this.passwordValue)
    ) {
      this.state = 2;
      return true;
    }

    return false;
  }

  private isMediumPassword():boolean {

    if (
      this.checkingService.checkDigitsLetters(this.passwordValue) ||
      this.checkingService.checkDigitsSymbols(this.passwordValue) ||
      this.checkingService.checkLettersSymbols(this.passwordValue)
    ) {
      this.state = 3;
      return true;
    }

    return false;
  }

  private isStrongPassword(): boolean{
    if(!this.isEmptyPassword() && !this.isShortPassword() && !this.isEasyPassword() && !this.isMediumPassword()){
      this.state = 4;

      return true;
    }

    return false;
  }

  private changePasswordStateStatus(): void {
    this.passwordStrengthService.changeState(this.state);
  }

  ngOnInit(): void {
    this.subs = this.passwordStrengthService.state$.subscribe((state)=> this.state = state);
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }
}
