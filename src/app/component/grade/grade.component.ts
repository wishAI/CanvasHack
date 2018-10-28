import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';


@Component({
  selector: 'app-grade-wrapper',
  templateUrl: './grade.html',
  styleUrls: ['./grade.css'],
  providers: [MainService]
})
export class GradeComponent implements OnInit {

  grades: Object[];


  constructor (
    private mainService: MainService
  ) {
    this.grades = [];
  }

  ngOnInit(): void {
    this.mainService.requestGrades().subscribe(this.loadModel.bind(this));
  }

  loadModel(res: Object) {
    this.grades = <Object[]> res;
    for (const grade of this.grades) {
      grade['name'] = 'quiz';
    }

    this.grades = this.grades.filter(grade => grade['grade'] !== '0' && grade['grade'] != null);
  }

  handleError(err: Object) {
    console.log(err);
  }

  grade(grade: {}): string {
    return grade['name'] + '    ' + grade['score'] + '/' + grade['grade'];
  }

}

