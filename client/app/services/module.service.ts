import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ModuleService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }
  getModules(): Observable<any> {
    return this.http.get('/api/modulelist').map(res => res.json());
  }
  geModulelist(): Observable<any> {
    return this.http.get('/api/modulelist').map(res => res.json());
  }
  getModule(list): Observable<any> {
    return this.http.get(`/api/modulelist/${list._id}`).map(res => res.json());
  }

  getrolemodule(type): Observable<any> {
   //console.log(type);
    return this.http.get(`/api/getrolemodule/${type}`).map(res => res.json());
  }

  getcountrolemodule(roledata): Observable<any> {
    //console.log(type);
     return this.http.get(`/api/getrolemodule/count/${roledata.usertype}`).map(res => res.json());
   }


  saveRoleModule(roledata): Observable<any> {
    console.log(roledata);
   // console.log(roledata.formdata);
    if(roledata.countdata > 0 ){
      return this.http.put(`/api/savemodulerole/${roledata.formdata.usertype}`, JSON.stringify(roledata.formdata), this.options);
     
    }else{
      return this.http.post(`/api/savemodule/`, JSON.stringify(roledata.formdata), this.options);
      
    }
    
  }
}
