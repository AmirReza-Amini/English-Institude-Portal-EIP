import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanelComponent } from './panel/panel.component';
import { BasketComponent } from './basket/basket.component';
import { ProductsComponent } from './products/products.component';
import { SettingComponent } from './setting/setting.component';
import { CustomersComponent } from './customers/customers.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { UserInfoComponent } from './setting/user-info/user-info.component';
import { ReportComponent } from './report/report.component';
import { MainMenuComponent } from './setting/main-menu/main-menu.component';
import { ConfirmComponent } from './Common/confirm/confirm.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewDashboardComponent } from './new-dashboard/new-dashboard.component';
import { NewUserComponent } from './customers/new-user/new-user.component';
import { UsersListComponent } from './customers/users-list/users-list.component';
import { BasketDetailComponent } from './common/basket-detail/basket-detail.component';
import { LoadingComponent } from './common/loading/loading.component';
import { SelectModalComponent } from './common/select-modal/select-modal.component';
import { CustomComboComponent } from './common/custom-combo/custom-combo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PanelComponent,
    BasketComponent,
    ProductsComponent,
    SettingComponent,
    CustomersComponent,
    ErrorPageComponent,
    HomeComponent,
    UserInfoComponent,
    ReportComponent,
    MainMenuComponent,
    ConfirmComponent,
    NewDashboardComponent,
    NewUserComponent,
    UsersListComponent,
    BasketDetailComponent,
    LoadingComponent,
    SelectModalComponent,
    CustomComboComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
