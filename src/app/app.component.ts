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

}
