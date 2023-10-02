import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnService } from '../return.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent {

  carts: any[] = [];
  constructor(private returnService: ReturnService,private router:Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Call your method to fetch updated data when NavigationEnd event occurs
        this.checkedOutCycles();
      });
   }
  
  ngOnInit() {

    this.checkedOutCycles();
    
  }


  returnCycle(cartId: number,cycleId:number) {
    this.returnService.returnCycle(cartId,cycleId).subscribe(() => {
      window.location.reload();
    });
  }
 
  checkedOutCycles(){
    this.returnService.getCheckedOutItems().subscribe((items: any[]) => {
      this.carts = items;
    }); 
  }
  
}


