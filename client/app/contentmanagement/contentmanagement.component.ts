import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModuleService } from '../services/module.service';
@Component({
  selector: 'app-contentmanagement',
  templateUrl: './contentmanagement.component.html',
  styleUrls: ['./contentmanagement.component.scss']
})
export class ContentmanagementComponent implements OnInit {

  constructor(public auth: AuthService,private moduleService: ModuleService,) { }

  ngOnInit() {
      //check user role authentication    
      this.moduleService.checkModule();
  }

}
