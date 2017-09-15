import { Component, OnInit, OnChanges } from '@angular/core';
import { MangeroleService } from '../services/mangerole.service';
import { ModuleService } from '../services/module.service';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from '../shared/toast/toast.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rolemanagement',
  templateUrl: './rolemanagement.component.html',
  styleUrls: ['./rolemanagement.component.scss']
})
export class RolemanagementComponent implements OnInit {

  constructor(private router: Router, public toast: ToastComponent, private roleService: MangeroleService, private moduleService: ModuleService, private formBuilder: FormBuilder) { }
  roles = [];
  modulelist = [];
  rolemodule = [];
  isLoading = true;
  rolemanagementForm: FormGroup;
  selectedValues: string[] = [];
  usertype = new FormControl('', [Validators.required]);
  namemodule = new FormControl('', [Validators.required]);
  countroles = [];

  myForm: FormGroup;
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      usertype: this.usertype,
      namemodule: this.formBuilder.array([])

    });
    this.getRoles();
    this.geModulelist();
  }

  onChange(namemodule: string, isChecked: boolean) {
    const moduleFormArray = <FormArray>this.myForm.controls.namemodule;

    if (isChecked) {
      moduleFormArray.push(new FormControl(namemodule));
    } else {
      let index = moduleFormArray.controls.findIndex(x => x.value == namemodule)
      moduleFormArray.removeAt(index);
    }

    console.log(moduleFormArray);
  }


  getmodule(val) {
    this.myForm = this.formBuilder.group({
      usertype: this.usertype,
      namemodule: this.formBuilder.array([])

    });
    console.log(val)
    this.getroleList(val)

  }

  /*
    // send_categories() is now called after get_categories().
  search_categories() {
    this.get_categories(1)
      // The .subscribe() method accepts 3 callbacks
      .subscribe(
        // The 1st callback handles the data emitted by the observable.
        // In your case, it's the JSON data extracted from the response.
        // That's where you'll find your total property.
        (jsonData) => {
          this.send_categories(jsonData.total);
        },
        // The 2nd callback handles errors.
        (err) => console.error(err),
        // The 3rd callback handles the "complete" event.
        () => console.log("observable complete")
      );
  }
  
  */

  getroleList(type) {
    this.moduleService.getrolemodule(type).subscribe(
      (data) => {
        this.rolemodule = data;
        this.change(data);
      },

      error => console.log(error),
      () => this.isLoading = false
    );


  }

  change(data) {
    if (data != null) {
      var namemodule = {};
      var allPropertyNames = [];
      // console.log(this.modulelist);
      this.modulelist.forEach(element => {
        var array = [];
        var serach = data.namemodule;

        var myFunction = element
        //   console.log(myFunction);
        // console.log(data.namemodule+'--'+element.link)
        if ((serach) && serach.indexOf(element.link) > -1) {
          // Object element.({"checked":true,"link":element.link});
          allPropertyNames.push({ "name": element.modulename, "checked": true, "link": element.link });

          //  console.log(element);
        }
        else {
          allPropertyNames.push({ "name": element.modulename, "checked": false, "link": element.link });
          // console.log(array);
        }

        //  console.log(array1);
      });
      this.modulelist = allPropertyNames;

      this.selectedValues = allPropertyNames;
    } else {

      this.geModulelist();
      let list = { checked: false }
      console.log(list.checked);
    }
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


  countModulRole() {

    this.moduleService.getcountrolemodule(this.myForm.value).subscribe(
      data => this.countroles = data,
      error => console.log(error)

    );


  }
  saveRole() {



    this.moduleService.getcountrolemodule(this.myForm.value).subscribe(
      (data) => {
        this.countroles = data;
        this.savedata();
      },

      error => console.log(error),
      () => this.isLoading = false
    );








    this.countModulRole();
    console.log(this.countroles)



  }


  savedata() {

    this.moduleService.saveRoleModule({
      formdata: this.myForm.value,
      countdata: this.countroles,
    }).subscribe(
      res => {
        this.toast.setMessage('Role has been set successfully', 'success');
        this.router.navigate(['/rolemanagement']);
      },
      error => this.toast.setMessage('something went wrong ,please try again', 'danger')
      );

  }

}
