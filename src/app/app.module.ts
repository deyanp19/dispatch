import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListOfTrucksComponent } from './list-of-trucks/list-of-trucks.component';
import { ListOfDriversComponent } from './list-of-drivers/list-of-drivers.component';
import { MyIfDirective } from './my-if.directive';
import { LogInComponent } from './log-in/log-in.component';
 
import { HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListOfTrucksComponent,
    ListOfDriversComponent,
    MyIfDirective,
    LogInComponent,
 
    UsersComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
   
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
