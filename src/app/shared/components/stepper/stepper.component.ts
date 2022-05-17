import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'form-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,//No solo queda implementado al reactiveForm sino tambien al ngModel
      useExisting: forwardRef(()=>StepperComponent),//importamos el componente
      multi: true,//nos permite tener multiples valores
    }
  ]
})
export class StepperComponent implements OnInit, ControlValueAccessor {

  currentValue = 5;
  onChange = (_: any) => {};
  onTouch = () => {};
  isDisable: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  sub(){
    this.currentValue = this.currentValue + 1;
    this.onTouch();
    this.onChange(this.currentValue);
  }

  add(){
    this.currentValue = this.currentValue - 1;
    this.onTouch();
    this.onChange(this.currentValue);
  }

  writeValue(obj: any): void {//este método sirve para recibir valores desde el componente donde esta el formulario
    if(obj){
      this.currentValue = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisable = isDisabled;
  }
}
