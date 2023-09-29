import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '/home/brunda/AngularCycleShop/src/app/home/home.component';
import { RestockComponent } from './restock/restock.component';
import { ReturnComponent } from './return/return.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'restock', component: RestockComponent },
  { path: 'return', component: ReturnComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path : 'cart', component : CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
