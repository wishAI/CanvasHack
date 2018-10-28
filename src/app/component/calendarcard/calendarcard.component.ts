import { Component, Input } from '@angular/core';
import { MainService } from 'src/app/service/main.service';


@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendarcard.html',
  styleUrls: ['./calendarcard.css']
})
export class CalendarCardComponent {

  @Input()
  calendar: Object;


  constructor (
  ) {
  }

  date(): string {
    console.log(this.calendar['date']);
    const dayNames: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
    const date: Date = this.calendar['date'];
    const day: number = date.getDay();
    return date.getDate().toString() + '     ' + dayNames[day];
  }

}

