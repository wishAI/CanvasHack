import { Component } from "@angular/core";
import { MainService } from "src/app/service/main.service";


@Component({
  selector: 'calendar-wrapper',
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.css'],
  providers: [MainService]
})
export class CalendarComponent {
  
  constructor (
    private mainService: MainService
  ) {
  }
  
}
