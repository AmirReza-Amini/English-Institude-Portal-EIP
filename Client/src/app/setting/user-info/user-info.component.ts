import { Component } from '@angular/core';
import { User } from '../../model/userModel';
import { UserService } from '../../services/user.service';
import { Tools } from '../../Util/Tools';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  providers: [Tools]
})
export class UserInfoComponent {

  EditMode = false;
  showCalendar = false;
  currentUser: User = { id: 0, name: '', family: '', birthDate: ['1368'], email: '', isActive: false, password: '' };

  constructor(private userService: UserService, public tool: Tools) {
    this.FireUpUser();
  }

  Reset() {
    this.EditMode = false;
    this.FireUpUser();
  }

  Save(user: User) {

    this.FireUpUser(false);
    this.EditMode = false;
  }

  FireUpUser(loadFromDb = true) {
    if (loadFromDb)
      this.userService.Get(8).subscribe(m => {
        this.currentUser = m.json();
      });
  }

}
