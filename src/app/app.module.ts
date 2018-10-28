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
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';


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
    MatGridListModule,
    MatListModule,
    MatDividerModule
  ],
  exports: [
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
