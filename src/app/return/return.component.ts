import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent {

  newdata: any;
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    
  }
  returnCycle(id: number) {
    
  }
}


