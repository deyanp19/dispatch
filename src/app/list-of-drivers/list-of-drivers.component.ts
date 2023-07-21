import { Component, Input, OnInit } from '@angular/core';
import {IDriver} from '../interface';

@Component({
  selector: 'app-list-of-drivers',
  templateUrl: './list-of-drivers.component.html',
  styleUrls: ['./list-of-drivers.component.scss']
})



export class ListOfDriversComponent implements OnInit {
 @Input() arrayOfDrivers:{name:string,age:number}[]=[];
  constructor() {
   
   }

  ngOnInit(): void {
  }

}
