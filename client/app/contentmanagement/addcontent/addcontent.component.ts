import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ToastComponent } from '../../shared/toast/toast.component';
import { Router } from '@angular/router';
import {CommonService } from '../../services/common.service';
@Component({
  selector: 'app-addcontent',
  templateUrl: './addcontent.component.html',
  styleUrls: ['./addcontent.component.scss']
})
export class AddcontentComponent implements OnInit {
  pageForm: FormGroup;
  isLoading = false;
  desc: string;
  constructor(public toast: ToastComponent, private fb: FormBuilder, private router: Router, private commonService: CommonService) { }
  ngOnInit() {
    this.pageForm = this.fb.group({
      'pagename': new FormControl('', Validators.required),
      'desc': new FormControl(''),

    });


  }
  save() {
    this.commonService.save(this.pageForm.value).subscribe(
      res => {
        this.toast.setMessage('page Added Successfully', 'success');
        this.router.navigate(['/cms']);
      },
      error => this.toast.setMessage('something wrong to save page', 'danger')
    );
  }



}
