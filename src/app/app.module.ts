import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TotalComponent } from './total/total.component';
import { Num1Component } from './num1/num1.component';
import { Num2Component } from './num2/num2.component';
import { AddService } from './add.service';


@NgModule({
  declarations: [
    AppComponent,
    TotalComponent,
    Num1Component,
    Num2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [AddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
