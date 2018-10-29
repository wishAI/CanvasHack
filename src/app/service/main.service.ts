import { Injectable } from '@angular/core';

import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class MainService {

  public static readonly URL_ROOT = 'http://localhost:8888/';
  // public static readonly TOKEN = '11224~pIuXX8MsO8QLNmHvmr1lFOIgd3FqM6YGYMyf52qOQIj98veX39kbhcyho5d2JUmB';


  constructor(
    private http: Http
  ) {
  }

  public requestEvents() {
    return this.http.get(MainService.URL_ROOT + 'users/self/upcoming_events', {params: {a: 1}})
      .pipe(
        map(res => res.json())
      );
  }

  public requestGrades() {
    return this.http.get(MainService.URL_ROOT + 'courses/9381/students/submissions', {params: {a: 1}})
      .pipe(
        map(res => res.json())
      );
  }

  public requestNotifications() {
    return this.http.get(MainService.URL_ROOT + 'users/activity_stream', {params: {a: 1}})
      .pipe(
        map(res => res.json())
      );
  }

  public requestAssignments(id: number) {
    return this.http.get(MainService.URL_ROOT + 'courses/9381/assignments/' + id, {params: {a: 1}})
      .pipe(
        map(res => res.json())
      );
  }

  // private extractData(res: Response): Object {
  //   return res.json();
  // }

  // private handleError(err: Object, caught: Observable<{}>): Observable<Object> {
  //   return Observable.throw(err);
  // }

}
