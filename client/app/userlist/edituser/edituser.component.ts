import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../../shared/toast/toast.component';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {

  user = [];
  
  selecteduser = [];
  isLoading = true;
  isEditing = false;
  editForm: FormGroup;
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

  constructor(private formBuilder: FormBuilder,
               private router: Router,
               private route: ActivatedRoute,
              public toast: ToastComponent,
              private userService: UserService) { }
  ngOnInit() {
    var id=this.route.params['_value'].id;
    this.getUserSelected(id);
    this.editForm = this.formBuilder.group({
      username: this.username,
      email: this.email,
      role: this.role
    });
  }
  setClassUsername() {
    return { 'has-danger': !this.username.pristine && !this.username.valid };
  }
  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }
  
  //get selected user details
  getUserSelected(id) {
    this.userService.getUserSelected(id).subscribe(

      (data) => {
        this.user = data;
      
        //this.refresh() should work here
      },

      error => console.log(error),
      () => this.isLoading = false
    );
  }
 
//update user form

  save(user) {
    this.userService.editUser(user).subscribe(
      res => {
        this.toast.setMessage('User Updated Successfully', 'success');
        this.router.navigate(['/userlist']);
      },
      error => console.log(error)
    );
  }
  
}
//this.router.navigate(['/userlist']);