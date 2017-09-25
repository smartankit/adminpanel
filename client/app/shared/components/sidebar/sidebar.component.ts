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
  

   
order = 'position';
ascending = true;
   // order = 'position';
    constructor(private moduleService: ModuleService,public auth: AuthService) {  }
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
