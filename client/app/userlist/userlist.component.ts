import { Component, OnInit } from '@angular/core';

import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { routerTransition } from '../router.animations';
@Component({
  selector: 'app-admin',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  animations: [routerTransition()]
})
export class UserListComponent implements OnInit {

  users = [];
  selecteduser=[];
  isLoading = true;

  constructor(public auth: AuthService,
              public toast: ToastComponent,
              private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => this.users = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }
  getUser(user) {
    this.userService.getUser(user).subscribe(
      data => this.selecteduser = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }
  deleteUser(user) {
    this.userService.deleteUser(user).subscribe(
      data => this.toast.setMessage('user deleted successfully.', 'success'),
      error => console.log(error),
      () => this.getUsers()
    );
  }

}
