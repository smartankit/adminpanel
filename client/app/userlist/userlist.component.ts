import { Component, OnInit } from '@angular/core';

import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { routerTransition } from '../router.animations';
import { MangeroleService } from '../services/mangerole.service';

@Component({
  selector: 'app-admin',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
  animations: [routerTransition()]
})
export class UserListComponent implements OnInit {
  order: string = 'username';
  reverse: boolean = false;
  users = [];
  user = {};
  selecteduser = [];
  isLoading = true;
  roles = [];
  constructor(public auth: AuthService,
    public toast: ToastComponent,
    private userService: UserService, private roleService: MangeroleService) { }
  
   //for pagination
    p: number = 1;
  
    ngOnInit() {
    this.getUsers();
    this.getRoles();
  }
  //get all  user details
  getRoles() {
    this.roleService.getRoles().subscribe(
      data => this.roles = data,
      error => console.log(error),
     // () => this.isLoading = false
    );
  }

     //for sorting reverse
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  //get all  user details
  getUsers() {
    this.userService.getUsers().subscribe(
      data => this.users = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }
  //get selected user details
  getUser(user) {
    this.userService.getUser(user).subscribe(

      (data) => {

        this.selecteduser = data;
        this.showDialog();
        //this.refresh() should work here
      },

      error => console.log(error),
      () => this.isLoading = false
    );
  }
  //delete all user details
  deleteUser(user) {
    this.userService.deleteUser(user).subscribe(
      data => this.toast.setMessage('user deleted successfully.', 'success'),
      error => console.log(error),
      () => this.getUsers()
    );
  }


  display: boolean = false;

  showDialog() {

    this.display = true;
  }

}