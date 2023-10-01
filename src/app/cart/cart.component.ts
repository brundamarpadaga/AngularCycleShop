import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];
  totalCost : number;
  borrowedDays: { [key: string]: number } = {};

  constructor(private cartService: CartService,private router:Router) { }

  ngOnInit() {
    this.getCartItems();
  }

  mapData(){
    this.cartItems.forEach(item => this.borrowedDays[item.id] = item.days);
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe(response => {
      console.log(response);
      this.cartItems = response;
    });
  }

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id).subscribe(() => {
      console.log(`Item with ID ${id} removed from cart.`);
      this.ngOnInit(); // Refresh the cart items after removal
    });
  }

  removeAllFromCart() {
    this.cartService.removeAllFromCart().subscribe(() => {
      console.log('All items removed from cart.');
      this.ngOnInit(); // Refresh the cart items after removal
    });
  }

  checkout(){
    this.mapData();
    console.log(this.borrowedDays);
    this.cartService.checkout(this.borrowedDays).subscribe();
    this.router.navigate(['/return']);
   }

  calculateTotal() {
    this.totalCost = this.cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.cycle.price * cartItem.days;
    }, 0);
  }
}
