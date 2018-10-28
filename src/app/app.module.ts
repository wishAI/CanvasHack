import { CalendarCardComponent } from './component/calendarcard/calendarcard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainService } from './service/main.service';
import { HttpModule } from '@angular/http';
import { CalendarComponent } from './component/calendar/calendar.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MatCardModule,
    MatGridListModule
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
