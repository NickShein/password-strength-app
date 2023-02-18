import { Component, ElementRef, forwardRef, Input, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputAreaComponent),
    multi: true
  }]
})
export class InputAreaComponent implements ControlValueAccessor {
  @Input() colorListWeak: string[] = [];
  @Input() state: number = 0;
  public value: string | undefined;

  private onChange!: (value: string) => void;
  private onTouched!: () => void;


  constructor(private readonly changeDetector: ChangeDetectorRef) { }

  public onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value;

    this.onChange(value);
}

public writeValue(value: string): void {
  this.value = value;

  this.changeDetector.detectChanges();
}

public registerOnChange(fn: (value: string) => void): void {
  this.onChange = fn;
}

public registerOnTouched(fn: () => void): void {
  this.onTouched = fn;
}
}
