import { Injectable } from '@angular/core';
import { ServerRoutes } from '../routesAndUrls';
import { ApiResult } from '../model/ApiResult';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) {
  }

  GetMenuItems(): Observable<ApiResult> {
    return this.http.get<ApiResult>(ServerRoutes.MENU.GENERAL);
  }

  AddOrUpdate(menuItem): Observable<ApiResult> {
    return this.http.post<ApiResult>(ServerRoutes.MENU.GENERAL, menuItem);
  }

  ChangeOrder(value): Observable<ApiResult> {
    return this.http.post<ApiResult>(ServerRoutes.MENU.CHANGE_ORDER, value);
  }

  ToggleActive(menuId): Observable<ApiResult> {
    return this.http.get<ApiResult>(ServerRoutes.MENU.TOGGLE_ACTIVE + '/' + menuId);
  }
}

