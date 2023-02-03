import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckingService {
  regLetters: RegExp = /^[a-zA-Z]+$/;
  regDigits: RegExp = /^\d+$/;
  regLettersDigits: RegExp = /^[A-Za-z0-9]*$/;

  checkSymbols(passwordCopy: string): boolean {
    if (passwordCopy.replace(/[A-Za-z0-9]/g, '') == passwordCopy) {
      return true;
    } else {
      return false;
    }
  }

  checkLetters(passwordCopy: string): boolean {
    if (this.regLetters.test(passwordCopy)) {
      return true;
    } else {
      return false;
    }
  }

  checkDigits(passwordCopy: string): boolean {
    if (this.regDigits.test(passwordCopy)) {
      return true;
    } else {
      return false;
    }
  }

  checkDigitsLetters(passwordCopy: string): boolean {
    if (
      passwordCopy.replace(/[A-Za-z0-9]/g, '').length == 0 &&
      passwordCopy.replace(/[A-Za-z]/g, '').length > 0 &&
      passwordCopy.replace(/[0-9]/g, '').length > 0 &&
      passwordCopy.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  checkDigitsSymbols(passwordCopy: string): boolean {
    if (
      passwordCopy.replace(/[0-9]/g, '').length > 0 &&
      passwordCopy.replace(/[A-Za-z]/g, '').length == passwordCopy.length &&
      passwordCopy.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  checkLettersSymbols(passwordCopy: string): boolean {
    if (
      passwordCopy.replace(/[A-Za-z]/g, '').length > 0 &&
      passwordCopy.replace(/[0-9]/g, '').length == passwordCopy.length &&
      passwordCopy.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  constructor() {}
}
