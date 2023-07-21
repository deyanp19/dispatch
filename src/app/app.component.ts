import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-app';
    driversList=[
    {name:'Ivan',age:34},
    {name:'Damyan',age:33},
    {name:'Ivan',age:34},

  ]; 

  addNewEmitHandler(emittedPeople:{name:string,age:number}):void {
    this.driversList.push(emittedPeople);
    this.driversList.forEach(x=>x.age=x.age+x.name.length/99);
    
  }

}
