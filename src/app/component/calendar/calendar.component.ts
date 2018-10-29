import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';


@Component({
  selector: 'app-calendar-wrapper',
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.css'],
  providers: [MainService]
})
export class CalendarComponent implements OnInit {

  calendars: Object[];


  constructor (
    private mainService: MainService
  ) {
    this.calendars = [];
  }

  ngOnInit(): void {
    this.mainService.requestEvents().subscribe(this.loadModel.bind(this));
  }

  loadModel(res: Object) {
    const events = <Object[]> res;
    // console.log(events[0]);
    const date: Date = new Date();
    for (let i = 0; i < 5; i ++) {
      const calendar: Object = {};
      const d: Date = new Date();
      d.setDate(date.getDate() + i);
      calendar['date'] = d;
      calendar['events'] = [];
      for (const event of events) {
        const start: Date = new Date(event['start_at']);
        if (start.getDate() === d.getDate()) {
          calendar['events'].push(event['title']);
        }
      }

      this.calendars.push(calendar);
    }
  }

  handleError(err: Object) {
    console.log(err);
  }

}
