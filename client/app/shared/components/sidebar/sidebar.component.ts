import { Component} from '@angular/core';
import { ModuleService } from '../../../services/module.service';
import { AuthService } from '../../../services/auth.service';




@Component(
    {
    
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    
   
})
export class SidebarComponent {
  
    allmodule=[];
    moduleinfo=[];
  

    allModulelist1=[ { "_id": "59baa72a67f8829ea799f5ca", "modulename": "userlist", "link": "userlist", "alias": "userlist", "icon": "fa-user", "position": 2 }, { "_id": "59bbef155d626e1bdb26054c", "modulename": "dashboard", "link": "dashboard", "alias": "dashboard", "icon": "fa-tachometer", "position": 1 }, { "_id": "59bc109a5d626e1bdb261599", "modulename": "rolemanagement", "link": "rolemanagement", "alias": "rolemanagement", "icon": "fa-user-circle-o", "position": 5 }, { "_id": "59baa76667f8829ea799f5cb", "modulename": "rolemanage", "link": "rolemanage", "alias": "rolemange", "icon": "fa-tasks", "position": 6 }, { "_id": "59baa78367f8829ea799f5cc", "modulename": "modulelist", "link": "modulelist", "alias": "modulelist", "icon": "fa-server", "position": 3 } ]
order = 'position';
ascending = true;
   // order = 'position';
    constructor(private moduleService: ModuleService,private auth: AuthService) {  }
    ngOnInit() {

            this.moduleService.getrolemodule(this.auth.currentUser.role).subscribe(
            (datas) => {
              this.allmodule = datas;
              this.getMuduleinfo(datas);
          //    console.log(this.allmodule);
            },
            error => console.log(error),
           
          );
       



    }
   
    allModulelist=[]; 
   
    getMuduleinfo(datai){
        var array = new Array();
        if (datai != null) {
            console.log(datai);
            this.moduleService.getsingleModule(datai).subscribe(
                (data) => {
                    this.allModulelist=data;
                 // array.push(data);
               // console.log( array);
                },
                error => console.log(error),
               
              );
         
        
           
        }
     //  this.array=array;
     console.log(this.allModulelist);
    }
    
  
    
    isActive = false;
    showMenu = '';
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
