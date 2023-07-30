import { Component,OnInit,OnChanges,  SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges  {
 
  title = 'first-app';
    driversList=[
    {name:'Ivan',age:34},
    {name:'Damyan',age:33},
    {name:'Ivan',age:34},

  ]; 
  constructor() {
    console.log(this.driversList);
    ;
    
  }
  ngOnInit():void {
  console.log(this.driversList);
    ;
  }
  ngOnChanges(changes: SimpleChanges):void {
    console.log(changes);
    ;
    
  }
  flagDriversList=true;
  toggleDrivers(){
    console.log(this.flagDriversList);
    this.flagDriversList=!this.flagDriversList
    
  }
  flagTite:boolean=true;
  toggleTitle(){
    console.log(this.flagTite);
    this.flagTite=!this.flagTite;
  }
  addNewEmitHandler(emittedPeople:{name:string,age:number}):void {
    this.driversList=this.driversList.concat(emittedPeople);
    this.driversList.forEach(x=>x.age=x.age+x.name.length/99);
    
  }

}
