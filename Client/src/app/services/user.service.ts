import { Injectable } from '@angular/core';
import { ServerRoutes } from '../routesAndUrls';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResult } from '../model/ApiResult';
import { User } from '../model/userModel';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }
  Get(id = null): Observable<ApiResult> {
    if (id != null)
      return this.http.get<ApiResult>(ServerRoutes.USER.GENERAL + id);
    return this.http.get<ApiResult>(ServerRoutes.USER.GENERAL);
  }

  ToggleBan(id): Observable<ApiResult> {
    return this.http.get<ApiResult>(ServerRoutes.USER.BAN + id);
  }

  AddOrEdit(user: User): Observable<ApiResult> {
    return this.http.post<ApiResult>(ServerRoutes.USER.GENERAL, user);
  }

  Delete(id): Observable<ApiResult> {
    return this.http.delete<ApiResult>(ServerRoutes.USER.GENERAL + id);
  }
}
