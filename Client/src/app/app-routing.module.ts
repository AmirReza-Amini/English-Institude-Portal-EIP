import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppRoutes } from './routesAndUrls';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanelComponent } from './panel/panel.component';
import { BasketComponent } from './basket/basket.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';
import { UserInfoComponent } from './setting/user-info/user-info.component';
import { MainMenuComponent } from './setting/main-menu/main-menu.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: AppRoutes.Home, component: HomeComponent },
  { path: AppRoutes.Login, component: LoginComponent },
  {
    path: AppRoutes.Admin.Panel, component: DashboardComponent, children: [
      { path: AppRoutes.Admin.Main, component: PanelComponent },
      { path: AppRoutes.Admin.Basket, component: BasketComponent },
      { path: AppRoutes.Admin.Products, component: ProductsComponent },
      { path: AppRoutes.Admin.Customers, component: CustomersComponent },
      { path: AppRoutes.Admin.Reports, component: ReportComponent },
      {
        path: AppRoutes.Admin.Setting.setting, component: SettingComponent, children: [
          { path: AppRoutes.Admin.Setting.userInfo, component: UserInfoComponent },
          { path: AppRoutes.Admin.Setting.mainMenu, component: MainMenuComponent }
        ]
      },
    ]
  },
  { path: AppRoutes.Error.ErrorPage, component: ErrorPageComponent },
  { path: AppRoutes.Error.AllOthers, redirectTo: AppRoutes.Home + AppRoutes.Error.ErrorPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
