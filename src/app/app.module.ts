import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListOfTrucksComponent } from './list-of-trucks/list-of-trucks.component';
import { ListOfDriversComponent } from './list-of-drivers/list-of-drivers.component';
import { MyIfDirective } from './my-if.directive';
import { LogInComponent } from './log-in/log-in.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListOfTrucksComponent,
    ListOfDriversComponent,
    MyIfDirective,
    LogInComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
