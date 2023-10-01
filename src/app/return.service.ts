import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReturnService {

  id : any[] = [];
  days : any[] = []
  apiUrl = 'http://localhost:8080';
  constructor( private http: HttpClient ) { }

  getCheckedOutItems() :  Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/cycle/checkedOutCycles`);
  }

  returnCycle(cartId:number,cycleId:number):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/api/cycle/${cartId}/${cycleId}/return`,null);
  }
}
