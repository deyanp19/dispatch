import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {
  constructor() { }
  user:any;
  onSubmit(form:NgForm):void {
    console.log('submitted');
    if (form) {
      
    }
    
  }

}
