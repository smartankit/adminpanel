import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class UserService {
 
 
  token=localStorage.getItem('token');

  
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8',
  'Authorization':localStorage.getItem('token')

 });

  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  register(user): Observable<any> {
    return this.http.post('/api/user', JSON.stringify(user), this.options);
  }
  addPhoto(url,formdata,data): Observable<any> {
    let headers = new Headers();
    headers.set('Accept', 'application/json');
    for (var property in data) {
      
            if (data.hasOwnProperty(property)) {
            console.log(property);
            console.log(data[property]);
            headers.set(property,data[property]);
            }
        }
   
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url,formdata, options).catch(this.handleError);
  }
  
  login(credentials): Observable<any> {
    return this.http.post('/api/login', JSON.stringify(credentials), this.options);
  }

  getUsers(): Observable<any> {
    return this.http.get('/api/users',this.options).map(res => res.json()).catch(this.handleError);
  }

  countUsers(): Observable<any> {
    return this.http.get('/api/users/count',this.options).map(res => res.json());
  }

  addUser(user): Observable<any> {
    return this.http.post('/api/user',this.options, JSON.stringify(user));
  }

  getUser(user): Observable<any> {
    return this.http.get(`/api/user/${user._id}`,this.options).map(res => res.json()).catch(this.handleError);
  }
  
  getUserSelected(id): Observable<any> {
    return this.http.get(`/api/user/${id}`,this.options).map(res => res.json()).catch(this.handleError);
  }
  editUser(user): Observable<any> {
    return this.http.put(`/api/user/${user._id}`, JSON.stringify(user),this.options);
  }

  deleteUser(user): Observable<any> {
    return this.http.delete(`/api/user/${user._id}`,this.options);
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
