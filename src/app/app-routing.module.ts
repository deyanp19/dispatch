import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { ListOfDriversComponent } from './list-of-drivers/list-of-drivers.component';
import { ListOfTrucksComponent } from './list-of-trucks/list-of-trucks.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [

  {
    path:'about',
    component:HomeComponent
  },
  {
    path:'register',
    component:RegisterComponent
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
    pathMatch:'full',
    component:LogInComponent
  },
  {path:'**',
  component:NotFoundError
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
