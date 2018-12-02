import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tools } from '../../Util/Tools'
@Component({
  selector: 'frm-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(public tool: Tools) { }

  ngOnInit() {
  }
  showCalendar: boolean = false;
  @Input() currentUser;
  @Input() showHide: boolean;
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onReset: EventEmitter<any> = new EventEmitter();
  Save() {
    this.onSave.emit(this.currentUser)
  }
  Reset() {
    this.onReset.emit();
  }
}
