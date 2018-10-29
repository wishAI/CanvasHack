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
    // this.mainService.requestAssignments().subscribe(this.loadName.bind(this));
  }

  loadModel(res: Object) {
    this.grades = <Object[]> res;
    for (const grade of this.grades) {
      grade['name'] = 'quiz';
    }

    this.grades = this.grades.filter(grade => grade['grade'] !== '0' && grade['grade'] != null);

    for (const grade of this.grades) {
      this.mainService.requestAssignments(grade['assignment_id']).subscribe(this.loadName.bind(this));
    }
  }

  loadName(res: Object) {
    // console.log(res);
    // console.log(this.grades);
    // const asses: Object[] = <Object[]> res;
    // for (const grade of this.grades) {
    //   for (const ass of asses) {
    //     // console.log(grade['assignment_id']);
    //     if (ass['id'] === grade['assignment_id']) {
    //       grade['name'] = ass['name'];
    //     }
    //   }
    // }
    for (const grade of this.grades) {
      if (grade['assignment_id'] === res['id']) {
        grade['name'] = res['name'];
      }
    }
  }

  handleError(err: Object) {
    console.log(err);
  }

  grade(grade: {}): string {
    return grade['name'] + ' ----- ' + grade['score'] + '/' + grade['grade'];
  }

}

