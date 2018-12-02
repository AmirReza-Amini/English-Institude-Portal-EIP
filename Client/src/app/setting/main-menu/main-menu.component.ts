import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from "../../services/menu.service";
import { Menu } from "../../model/menuModel";
import { Tools } from "../../Util/Tools";
import { ToasterService } from 'angular5-toaster';
import { Location } from '@angular/common';
import { ApiResult } from '../../model/ApiResult';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  providers: [Tools]
})
export class MainMenuComponent implements OnInit {

  menuItems = [];
  maxPosition = 9999;
  autoRefresh = true;

  constructor(private menuService: MenuService) {
    this.Load();
  }

  MenuItem: Menu = { url: '', id: 0, menuId: '', subMenuId: '', tag: '', text: '', icon: '', htmlId: '' };

  ngOnInit() {
  }

  ChangeOrder(order, menu) {
    this.menuService.ChangeOrder({ order: parseInt(order), id: menu.id }).subscribe(m => {
      this.ProccessResponse(m)
    });
  }

  Save() {
    this.menuService.AddOrUpdate(this.MenuItem).subscribe(m => m)
  }

  Load() {
    this.menuService.GetMenuItems().subscribe(menu => {
      if (menu.result)
        this.menuItems = menu.data;
    })

  }


  public ProccessResponse(response: ApiResult) {
    if (response.result) {
      // this.tool.ShowSuccessMsg(this.toast, response.message);
      this.Load();
    }
    // else
    //   this.tool.ShowErrMsg(this.toast, response.message)
  }

  ToggleActive(menuId) {
    this.menuService.ToggleActive(menuId).subscribe(m => this.ProccessResponse(m))
  }

  OnCheckedChange(value) {
    this.autoRefresh = value;
  }
}
