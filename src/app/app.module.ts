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
import { GradeComponent } from './component/grade/grade.component';
import {MatIconModule} from '@angular/material/icon';
import { NotificationComponent } from './component/notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarCardComponent,
    GradeComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
