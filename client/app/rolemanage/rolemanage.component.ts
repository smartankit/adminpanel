import { Component, OnInit } from '@angular/core';

import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';
import { MangeroleService } from '../services/mangerole.service';
import { routerTransition } from '../router.animations';


@Component({
  selector: 'app-rolemanage',
  templateUrl: './rolemanage.component.html',
  styleUrls: ['./rolemanage.component.scss'],
  animations: [routerTransition()]
})
export class RolemanageComponent implements OnInit {

  constructor( public toast: ToastComponent,private roleService: MangeroleService) { }
  roles=[];
  isLoading= true;
  ngOnInit() {
    this.getRoles();
  }




  //get all  user details
  getRoles() {
    this.roleService.getRoles().subscribe(
      data => this.roles = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

}
