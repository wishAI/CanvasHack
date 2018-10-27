import { Injectable } from "@angular/core";

import { Http, RequestOptions } from "@angular/http"
import { Observable } from "rxjs";
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class MainService {

  public static readonly URL_ROOT = "https://canvas.ubc.ca/api/v1/";
  public static readonly TOKEN = "11224~pIuXX8MsO8QLNmHvmr1lFOIgd3FqM6YGYMyf52qOQIj98veX39kbhcyho5d2JUmB";

  
  constructor(
    private http: Http
  ) {
  }

  public requestCourse() {
    return this.http.get(MainService.URL_ROOT + "course/9381", new RequestOptions({search: MainService.TOKEN}))
    .pipe(map(res => res.json), catchError(err => Observable.throw(err)));
  }

  // private extractData(res: Response): Object {
  //   return res.json();
  // }

  // private handleError(err: Object, caught: Observable<{}>): Observable<Object> {
  //   return Observable.throw(err);
  // }

}