import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class CommonService {
 
 
  token=localStorage.getItem('token');

  
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8',
  'Authorization':localStorage.getItem('token')

 });

  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  save(data): Observable<any> {
    return this.http.post('/api/savepage', JSON.stringify(data), this.options).catch(this.handleError);
  }
  getPages(): Observable<any> {
    return this.http.get('/api/getpages').map(res => res.json(), this.options).catch(this.handleError);
  }
 
  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body   = err.json() || '';
      let error  = body.err || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }

}
