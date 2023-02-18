import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { CommonModule } from '@angular/common';
import { InputAreaComponent } from './input-form/input-area/input-area.component';
import { PasswordStrengthAreaComponent } from './input-form/password-strength-area/password-strength-area.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    InputAreaComponent,
    PasswordStrengthAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
