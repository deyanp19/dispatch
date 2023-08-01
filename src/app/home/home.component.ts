import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name='Quatron Logistics Dashboard';
  nameOfPlaceholder = 'Quatron Logistics'
  item=true;
  inputText='zara';
  @Output() addMessageToParent=new EventEmitter();
  constructor() {
    deyanForm: NgForm;
    
   }
  displayAlert(msg:string,event:Event){
    this.name=msg;
    this.inputText='';
    this.addMessageToParent.emit({name:msg,age:msg.length*4})
    
    return !this.item;
    
  }

  ngOnInit(): void {    
  }

  ngAfterViewInit():void {
    
  }



}
