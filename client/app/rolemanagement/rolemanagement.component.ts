import { Component, OnInit } from '@angular/core';
import { MangeroleService } from '../services/mangerole.service';
import { ModuleService } from '../services/module.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastComponent } from '../shared/toast/toast.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rolemanagement',
  templateUrl: './rolemanagement.component.html',
  styleUrls: ['./rolemanagement.component.scss']
})
export class RolemanagementComponent implements OnInit {

  constructor(private router: Router, public toast: ToastComponent,private roleService: MangeroleService,private moduleService:ModuleService,private formBuilder: FormBuilder) { }
  roles=[];
  modulelist=[];
  isLoading=true;
  rolemanagementForm: FormGroup;

  usertype =  new FormControl('', [Validators.required]);
  modulename = new FormControl([], [Validators.required]);
  items: any[] = [];

  
  ngOnInit() {
    this.rolemanagementForm = this.formBuilder.group({
      usertype: this.usertype,
      namemodule: this.modulename
     
    });
    this.getRoles();
    this.geModulelist();
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
     
    });
  }
  //get all  user details
  getRoles() {
    this.roleService.getRoles().subscribe(
      data => this.roles = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }
   //get all  user details
   geModulelist() {
    this.moduleService.getModules().subscribe(
      data => this.modulelist = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  saveRole(){
    console.log(this.rolemanagementForm);
    this.moduleService.saveRoleModule(this.rolemanagementForm.value).subscribe(
      res => {
        this.toast.setMessage('Role has been set successfully', 'success');
        this.router.navigate(['/rolemanagement']);
      },
      error => this.toast.setMessage('something went wrong ,please try again', 'danger')
    );

  }


}
