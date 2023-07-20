import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name='Quatron Logistics Dashboard';
  nameOfPlaceholder = 'Quatron Logistics'
  item=true;

  constructor() {
   
   }

  randomNum(){
    return "88";
  }

  displayAlert(msg:string,event:Event){
    this.name=msg;
    console.log(event);
    
    return !this.item;
    
  }

  ngOnInit(): void {
  }
  ngAfterViewInit():void {
    
  }

}
