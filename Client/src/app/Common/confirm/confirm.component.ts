import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() modalId;
  @Input() title;
  @Input() text;
  @Output() onSubmit: EventEmitter<boolean> = new EventEmitter();

  Delete() {
    this.onSubmit.emit(true);   
  }
}