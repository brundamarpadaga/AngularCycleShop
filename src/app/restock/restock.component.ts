import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.component.html',
  styleUrls: ['./restock.component.css']
})
export class RestockComponent {
  cycleid: string = '';
  cyclecount: string = '';
  cyclestock: number = 0;
  cyclebrand: string = '';
  newdata: any;

  successMessage: string | null = null;


  constructor(private _http: HttpClient) { } 
  submitForm() {
    const cycleData = {
      id: this.cycleid,
      count: this.cyclecount
    };
    const id = this.cycleid;
    const url = `http://localhost:8080/api/cycle/${id}/restock?count=${this.cyclecount}`;

    const authToken =  localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization':  'Bearer ' + authToken, 
    });
    
    this._http.post(url, cycleData, {headers: headers, responseType: 'text' }).subscribe({
      next: (response) => {
        console.log('Cycle restocked successfully:', response);
        this.successMessage = 'Cycle restocked successfully: ' + response;
        setTimeout(() => {
          this.successMessage = null;
        }, 5000); // Clear the message after 5 seconds (adjust as needed)
      },
      error: (error) => {
        console.error('Error restocking cycle:', error);
      }
    });
  }

}
