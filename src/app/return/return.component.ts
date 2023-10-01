import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnService } from '../return.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent {

  carts: any[] = [];
  constructor(private returnService: ReturnService) { }
  
  ngOnInit() {
    this.returnService.getCheckedOutItems().subscribe((items: any[]) => {
      this.carts = items;
    });
  }
  returnCycle(cartId: number,cycleId:number) {
    this.returnService.returnCycle(cartId,cycleId).subscribe();
  }
  returnAll(){
    
  }
}


