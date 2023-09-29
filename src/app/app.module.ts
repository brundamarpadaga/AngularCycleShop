import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CyclesComponent } from './cycles/cycles.component';
import { HttpClientModule ,  HTTP_INTERCEPTORS} from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestockComponent } from './restock/restock.component';
import { ReturnComponent } from './return/return.component';
import { CartComponent } from './cart/cart.component';
import { AuthInterceptor } from './auth.interceptor';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    CyclesComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RestockComponent,
    ReturnComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, // Use your interceptor
      multi: true,
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
