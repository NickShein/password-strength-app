import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-strength-area',
  templateUrl: './password-strength-area.component.html',
  styleUrls: ['./password-strength-area.component.css']
})
export class PasswordStrengthAreaComponent implements OnInit {
  @Input() colorListWeak: string[] = [];
  @Input() colorListMedium: string[] = [];
  @Input() colorListStrong: string[] = [];
  @Input() state: number = 0;

  strengthPasswordControl = new FormControl();


  constructor() { }

  ngOnInit(): void {
  }

}
