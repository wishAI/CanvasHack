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
    this.text = "start testing";
  }
  
  ngOnInit(): void {
    this.mainService.requestCourse().subscribe(this.loadText.bind(this));
  }
  
  loadText(res: Response) {
    this.text = res["name"];
  }
  
  handleError(err: Object) {
    console.log(err);
  }
  
}
