import { Component, OnInit } from '@angular/core';
import { MainService } from './service/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MainService]
})
export class AppComponent implements OnInit {
  
  text: string;

  constructor(
    private mainService: MainService
  ) {
  }
  
  ngOnInit(): void {
    this.mainService.requestCourse().subscribe();
  }
  
}
