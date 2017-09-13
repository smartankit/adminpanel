import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../services/module.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { routerTransition } from '../router.animations';
@Component({
  selector: 'app-modulelist',
  templateUrl: './modulelist.component.html',
  styleUrls: ['./modulelist.component.scss'],
  animations: [routerTransition()]
})
export class ModulelistComponent implements OnInit {

  constructor(private moduleService:ModuleService, public toast: ToastComponent) { }
  modulelist=[];
  module={}
  isLoading=true;
  isLoadingpop=true;
  ngOnInit() {
    this.geModulelist();
  
  }
  //get all  user details
  geModulelist() {
    this.moduleService.getModules().subscribe(
      data => this.modulelist = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }
  getModule(list) {
    this.moduleService.getModule(list).subscribe(
      
            (data) => {
            
              this.module = data;
              this.showDialog();
              //this.refresh() should work here
            },
      
            error => console.log(error),
            () => this.isLoadingpop = false
          );
  }
  
  display: boolean = false;
  
    showDialog() {
  
      this.display = true;
    }
  

}
