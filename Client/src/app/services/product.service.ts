import { ServerRoutes } from './../routesAndUrls';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResult } from '../model/ApiResult';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ToggleExist(id): Observable<ApiResult> {
    return this.http.post<ApiResult>(ServerRoutes.PRODUCT.EXIST, { 'id': id });
  }

  constructor(private http: HttpClient) { }

  GetProduct(type): Observable<ApiResult> {
    return this.http.get<ApiResult>(ServerRoutes.PRODUCT.GENERAL + type);
  }

  AddOrUpdate(product) {
    return this.http.post(ServerRoutes.PRODUCT.GENERAL, product, { reportProgress: true, observe: 'events' });
  }
  
  // AddOrUpdate(product):  Observable<ApiResult> {
  //   return this.http.post<ApiResult>(ServerRoutes.PRODUCT.GENERAL, product);
  // }

  Delete(id): Observable<ApiResult> {
    return this.http.delete<ApiResult>(ServerRoutes.PRODUCT.GENERAL + id);
  }
}
