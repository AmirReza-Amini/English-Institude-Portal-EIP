import { MenuService } from '../services/menu.service';
import { Component, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css',
    './dashboard.component.rtl.css']
})
export class DashboardComponent implements DoCheck {
  current = '';
  userName = '';
  menuItems: [];
  constructor(private router: Router, private userService: UserService, menuService: MenuService, private activatedRoute: ActivatedRoute) {

    menuService.GetMenuItems().subscribe(menu => {
      if (menu.result)
        this.menuItems = menu.data;
    })


    this.userService.Get(8).subscribe(m => {
      if (m.result) {
        var user = m.data;
        this.userName = user.name + " " + user.family;
      }
      else {
        user = {};
        this.userName = m.message;
      }
    });
  }

  ngDoCheck() {
    this.activatedRoute.queryParams.subscribe(m => {
      let url = this.router.url.split('/');
      this.current = url[2] == undefined ? 'admin' : url[2].split('?')[0];
    });
  }
}
