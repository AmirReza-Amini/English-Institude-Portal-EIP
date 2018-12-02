import { ServerRoutes } from './../routesAndUrls';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResult } from '../model/ApiResult';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http: HttpClient) { }

  GetBaskets(): Observable<ApiResult> {
    return this.http.get<ApiResult>(ServerRoutes.BASKET.GENERAL);
  }

  GetDetail(basketId): Observable<ApiResult> {
    return this.http.get<ApiResult>(ServerRoutes.BASKET.GENERAL + basketId);
  }

  SetStatus(data): Observable<ApiResult> {
    return this.http.post<ApiResult>(ServerRoutes.BASKET.SET_STATUS, data);
  }
}
