import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderData } from './order.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private BASE_URL = environment.apiURL

  constructor(private http: HttpClient) { }
  getOrders():Observable<OrderData>{
    return this.http.get<OrderData>(`${this.BASE_URL}/orders`, {responseType: 'json'});
  };

  
}
