import { ToasterService } from 'angular5-toaster';
import { User } from '../model/userModel';
import { UserService } from '../services/user.service';
import { Component, Input } from '@angular/core';
import { Tools } from '../Util/Tools';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [Tools]
})
export class CustomersComponent {

  showCalendar = false;
  CurrentUserId = -1;
  AddOrEditMode: boolean = false;
  currentUser: User;
  userList: User[];
  //constructor(private userService: UserService, public tool: Tools, private toast: ToasterService) {
  constructor(private userService: UserService, public tool: Tools) {
    this.LoadUsers();
  }

  ToggleBan() {
    this.userService.ToggleBan(this.CurrentUserId).subscribe(m => {
      if (m)
        this.LoadUsers();
    })
  }

  Save() {
    this.userService.AddOrEdit(this.currentUser).subscribe(m => {
      if (m) {
        //   if (this.currentUser.id == 0)
        //     this.tool.ShowSuccessMsg(this.toast, 'کاربر مورد نظر با موفقیت اضافه شد')
        //   else
        //     this.tool.ShowSuccessMsg(this.toast, 'کاربر مورد نظر با موفقیت ویرایش شد')

        this.Reset();
      }
    });
  }
  LoadUsers() {
    this.userService.Get().subscribe(m => {
      this.userList = m.data;
      this.currentUser = {
        id: 0,
        name: '',
        family: '',
        birthDate: ['1368', '05', '15'],
        email: '',
        isActive: false,
        password: ''
      };
    });
  }

  Reset() {
    this.LoadUsers();
    this.AddOrEditMode = false;
    this.showCalendar = false;
  }

  SetUser(input) {
    this.currentUser = input;
    this.CurrentUserId = input.id;
  }

  Delete(confirmed) {
    if (confirmed) {
      this.userService.Delete(this.CurrentUserId).subscribe(m => {
        if (m) {
          // this.tool.ShowSuccessMsg(this.toast, 'کاربر مورد نظر با موفقیت حذف شد')
          this.Reset()
        }
        //else
        //this.tool.ShowErrMsg(this.toast, 'خطا در حذف کاربر');
      }
      );
    }
  }

  GoToEditMode(value) {
    console.log('Edit-Mode: ', value);
  }
}
