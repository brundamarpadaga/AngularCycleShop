import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newdata: any[]=[];
  successMessage: string = ''; 
  constructor(private http: HttpClient, private cartService : CartService) { }
  getallcycle() : Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8080/api/cycle/list',{headers : {'Authorization': 'Bearer ' + localStorage.getItem('token')}});
  }

  addToCart(id: number, quantityToBorrow: number) {
    this.cartService.addToCart(id, quantityToBorrow).subscribe();
    console.log(`Cycle with ID ${id} added to the cart.`);
    this.successMessage = `Cycle with ID ${id} added to the cart.`;
        // Clear the success message after a delay (e.g., 3 seconds)
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
  }

  ngOnInit() {
    this.getallcycle().subscribe({
      next: (res) => {
        this.newdata = res;
        console.log('Success: Response from API:', this.newdata);
      },
      error: (error) => {
        console.error('Error: Failed to fetch data from API:', error);
      }
    });
  }
}
