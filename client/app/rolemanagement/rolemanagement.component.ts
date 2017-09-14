import { Component, OnInit ,OnChanges} from '@angular/core';
import { MangeroleService } from '../services/mangerole.service';
import { ModuleService } from '../services/module.service';
import { FormArray,FormGroup, FormControl, Validators, FormBuilder,FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  rolemodule=[];
  isLoading=true;
  rolemanagementForm: FormGroup;
  selectedValues: string[] = [];
  usertype =  new FormControl('', [Validators.required]);
  modulename = new FormControl('', [Validators.required]);
 
  namemodule: any[] = [];
  myForm: FormGroup;
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      usertype: this.usertype,
      modulename:this.modulename,
      namemodule:this.formBuilder.array([])
     
    });
      this.getRoles();
    this.geModulelist();
  }  
  
  onChange(module:string, isChecked: boolean) {
    const moduleFormArray = <FormArray>this.myForm.controls.namemodule;

    if(isChecked) {
      moduleFormArray.push(new FormControl(module));
    } else {
      let index = moduleFormArray.controls.findIndex(x => x.value == module)
      moduleFormArray.removeAt(index);
    }
}

  
  getmodule(val)
  {
   console.log(val)  
   this.getroleList(val)
  
  }


  getroleList(type){
    this.moduleService.getrolemodule(type).subscribe(
      data => this.rolemodule = data.namemodule,
      error => console.log(error),
      () => this.isLoading = false
    );   


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
    console.log(this.myForm.value);
    this.moduleService.saveRoleModule(this.myForm.value).subscribe(
      res => {
        this.toast.setMessage('Role has been set successfully', 'success');
        this.router.navigate(['/rolemanagement']);
      },
      error => this.toast.setMessage('something went wrong ,please try again', 'danger')
    );

  }


}
