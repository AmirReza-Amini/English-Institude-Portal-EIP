import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tools } from '../../Util/Tools';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(public tool: Tools) { }

  ngOnInit() {
  }

  @Input() userList;
  @Input() AddOrEditMode;
  @Input() CurrentUser;

  @Output() onToggleBan: EventEmitter<number> = new EventEmitter();
  @Output() OnRowSelect: EventEmitter<number> = new EventEmitter();
  @Output() OnDelete: EventEmitter<boolean> = new EventEmitter();
  @Output() OnEditModeActivated: EventEmitter<boolean> = new EventEmitter();
  ToggleBan() {
    this.onToggleBan.emit();
  }

  Delete() {
    this.OnDelete.emit(true);
  }
  RowSelect(user) {
    this.CurrentUser = user;
    this.OnRowSelect.emit(user);
  }

  GoToEditMode() {
    this.OnEditModeActivated.emit();
  }



}
