import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';


@Component({
  selector: 'app-notification-wrapper',
  templateUrl: './notification.html',
  styleUrls: ['./notification.css'],
  providers: [MainService]
})
export class NotificationComponent implements OnInit {

  notifications: Object[];


  constructor (
    private mainService: MainService
  ) {
    this.notifications = [];
  }

  ngOnInit(): void {
    this.mainService.requestNotifications().subscribe(this.loadModel.bind(this));
  }

  loadModel(res: Object) {
    // console.log(res);
    this.notifications = <Object[]> res;
  }

  handleError(err: Object) {
    console.log(err);
  }

}


