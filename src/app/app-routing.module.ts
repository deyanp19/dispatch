import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { ListOfDriversComponent } from './list-of-drivers/list-of-drivers.component';
import { ListOfTrucksComponent } from './list-of-trucks/list-of-trucks.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:'home',
    pathMatch: 'full',
  },
  {
    path:'about',
    component:HomeComponent
  },
  {
    path:'dirvers',
    component:ListOfDriversComponent
  },
  {
    path:'trucks',
    component:ListOfTrucksComponent
  },
  {
    path:'login',
    component:LogInComponent
  },
  {path:'**',
  component:NotFoundError
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
