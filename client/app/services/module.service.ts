import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router,NavigationStart,RouteConfigLoadStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/map';
@Injectable()
export class ModuleService  {
  


  constructor(private http: Http, private router: Router,public auth: AuthService) { 

    
  }

    
  token=localStorage.getItem('token');
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8',
  'Authorization':localStorage.getItem('token'),
  'userrole':this.auth.currentUser.role

 });

  private options = new RequestOptions({ headers: this.headers });
  getModules(): Observable<any> {
    return this.http.get('/api/modulelist').map(res => res.json());
  }
  geModulelist(): Observable<any> {
    return this.http.get('/api/modulelist').map(res => res.json());
  }
  getModule(list): Observable<any> {
    return this.http.get(`/api/modulelist/${list._id}`).map(res => res.json());
  }
  getsingleModule(list): Observable<any> {
  
    return this.http.get(`/api/allmodulelistname/${list.namemodule}`).map(res => res.json());
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



  
  checkModule(){
    console.log(RouteConfigLoadStart);
        this.router.events.subscribe(event => {
          if (event instanceof RouteConfigLoadStart) {
            
           let url= event.route.path.replace(/\//g, "");
         // console.log("current url1", url); // event.url has current url
           // console.log(localStorage.getItem('token'));
                 
            if(this.auth.currentUser.role!='admin' && url!="dashboard" && url!="" && url!="not-found" && url!="logout" && localStorage.getItem('token')!=null){         
              this.checkModuleAccess(url)
           //  console.log("current url1", url); // event.url has current url
            
             }
           
          }
        });
    
      }
      checkModuleAccess(name) {
        this.checkaccess(name).subscribe(
             (data) => {
              
                if(data < 1){

                  this.router.navigate(['/not-found'])

                }
              }
        
             
        );
    
    
     
      }
      checkaccess(name): Observable<any> {
         return this.http.get(`/api/checkmodulepermission/count/${name}`,this.options).map(res => res.json());
       }
     
    
}
