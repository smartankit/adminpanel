import { Component, OnInit } from '@angular/core';

import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-rolemanage',
  templateUrl: './rolemanage.component.html',
  styleUrls: ['./rolemanage.component.scss']
})
export class RolemanageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
