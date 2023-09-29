import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReturnService {

  apiUrl = 'http://localhost:8080';
  constructor( private http: HttpClient ) { }

  getReturnCartItems() {
    return this.http.get('/api/cycle/checkout'); // Adjust the URL to match your API endpoint
  }
}
