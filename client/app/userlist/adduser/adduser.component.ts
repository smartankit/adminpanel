import { Component, OnInit, ElementRef, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastComponent } from '../../shared/toast/toast.component';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';
import { MangeroleService } from '../../services/mangerole.service';

import {Message,SelectItem} from 'primeng/components/common/api';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  registerForm: FormGroup;
  username = new FormControl('', [Validators.required,
                                  Validators.minLength(2),
                                  Validators.maxLength(30),
                                  Validators.pattern('[a-zA-Z0-9_-\\s]*')]);
  email = new FormControl('', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(100)]);
  password = new FormControl('', [Validators.required,
                                  Validators.minLength(6)]);

  role = new FormControl('', [Validators.required]);

  constructor(
    private http: Http,private formBuilder: FormBuilder,
              private router: Router,
              public toast: ToastComponent,
              private userService: UserService,private roleService: MangeroleService,
              private el: ElementRef
            ) { }

  ngOnInit() {
    this.getRoles();
    this.registerForm = this.formBuilder.group({
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role
    });

    
  }
  roles=[];
  selecteduser = [];
  isLoading = true;
  
  setClassUsername() {
    return { 'has-danger': !this.username.pristine && !this.username.valid };
  }
  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }
  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }
//get all  user details
getRoles() {
  this.roleService.getRoles().subscribe(
    data => this.roles = data,
    error => console.log(error),
    () => this.isLoading = false
  );
}
  register() {
    let formData = new FormData();
    let data =this.registerForm.value;
    
  
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    console.log("iam+ "+inputEl);
    let fileCount: number = inputEl.files.length;
   
    if (fileCount > 0) { // a file was selected
        for (let i = 0; i < fileCount; i++) {
            formData.append('photo', inputEl.files.item(i));
        }
      }  
       

      let promise = new Promise((resolve, reject) => {
      
        this.userService.addPhoto(formData,this.registerForm.value)
          .toPromise()
          .then(
            res => { // Success
              this.toast.setMessage('photo Added Successfully', 'success');
              this.router.navigate(['/userlist']);
            },
            error => this.toast.setMessage('email already exists', 'danger')
          );
      });
      return promise;
        
    }
  

    // this.userService.register(this.registerForm.value).subscribe(
    //   res => {
    //     this.toast.setMessage('User Added Successfully', 'success');
    //     this.router.navigate(['/userlist']);
    //   },
    //   error => this.toast.setMessage('email already exists', 'danger')
    // );
  }

  
  

