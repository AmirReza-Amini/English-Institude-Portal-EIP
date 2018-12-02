import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, OnChanges, forwardRef } from '@angular/core';
import { basketStatus, unitType } from '../../model/enum';


const noop = () => {
};

export const CustomComboComponentValueAccessor: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomComboComponent),
  multi: true
};


@Component({
  selector: 'custom-combo',
  templateUrl: './custom-combo.component.html',
  styleUrls: ['./custom-combo.component.css'],
  providers: [CustomComboComponentValueAccessor]
})
export class CustomComboComponent implements OnChanges, ControlValueAccessor {

  @Input() type;
  @Input() selectedValue = 0;
  data = []
  constructor() {

  }

  InnerValue: any = '';
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  get value(): any {
    return this.InnerValue;

  };

  set value(v: any) {
    this.InnerValue = v;
    this.onChangeCallback(v);
  }

  writeValue(value: any) {
    if (value !== this.InnerValue) {
      this.InnerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }


  ngOnChanges() {
    switch (this.type) {
      case 'unit-type':
        this.data = unitType;
        break;
      case 'basket-status':
        this.data = basketStatus;
        break;
      default: this.data = [{ key: -1, value: 'unknown' }]
        break;
    }


  }
}
