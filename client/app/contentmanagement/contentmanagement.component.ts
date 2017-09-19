import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModuleService } from '../services/module.service';
import { ToastComponent } from './../shared/toast/toast.component';
import {CommonService } from './../services/common.service';
import { routerTransition } from '../router.animations';
@Component({
  selector: 'app-contentmanagement',
  templateUrl: './contentmanagement.component.html',
  styleUrls: ['./contentmanagement.component.scss'],
  animations: [routerTransition()]
})
export class ContentmanagementComponent implements OnInit {

  constructor(public auth: AuthService,private moduleService: ModuleService,public toast: ToastComponent, private commonService: CommonService) { }
  pages=[];
  ngOnInit() {
      //check user role authentication    
      this.moduleService.checkModule();
      this.commonService.getPages().subscribe(pages => this.pages = pages);
  }

}


// getUsers() {
//   this.userService.getUsers().subscribe(
//     data => this.users = data,
//     error => console.log(error),
//     () => this.isLoading = false
//   );
// }