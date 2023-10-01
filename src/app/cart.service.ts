import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  addToCart(id: number, count: number) {
    return this.http.post(`${this.apiUrl}/api/cycle/${id}/addtocart?count=${count}`, {});
  }

  removeFromCart(id: number) : Observable<any>{
    return this.http.post(`${this.apiUrl}/api/cycle/${id}/removefromcart`, {});
  }

  removeAllFromCart() {
    return this.http.post(`${this.apiUrl}/api/cycle/removeall`, {});
  }

  getCartItems() : Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/api/cycle/displaycart`);
  }

  checkout(borrowedDays: { [key: string]: number }){
    return this.http.post(`${this.apiUrl}/api/cycle/checkout`, borrowedDays);
  }
}
