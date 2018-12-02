import { basketStatus } from './../../model/enum';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'select-modal',
  templateUrl: './select-modal.component.html',
  styleUrls: ['./select-modal.component.css']
})
export class SelectModalComponent{
  constructor() { }

  @Input() modalId;
  @Input() title;
  @Output() onSubmit: EventEmitter<boolean> = new EventEmitter();

  submit(value) {
    this.onSubmit.emit(value);
  }

}
