import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ToastComponent } from '../../shared/toast/toast.component';
import { Router,ActivatedRoute } from '@angular/router';
import {CommonService } from '../../services/common.service';

@Component({
  selector: 'app-editcontent',
  templateUrl: './editcontent.component.html',
  styleUrls: ['./editcontent.component.scss']
})
export class EditcontentComponent implements OnInit {
  pageForm: FormGroup;
  isLoading = false;
  pagedata=[];
  desc: string;
  constructor( private route: ActivatedRoute,public toast: ToastComponent, private fb: FormBuilder, private router: Router, private commonService: CommonService) { }
  ngOnInit() {
   
    var id=this.route.params['_value'].id;
    this.gePage(id);
    this.pageForm = this.fb.group({
      'pagename': new FormControl('', Validators.required),
      'desc': new FormControl(''),

    });


  }
  gePage(pageID) {
    this.commonService.getPage(pageID).subscribe(
      (data) => this.pagedata=data
    );
  }

  save(pages) {
    console.log(this.pageForm.value);
    this.commonService.editContent(pages).subscribe(
      res => {
        this.toast.setMessage('Page Updated Successfully', 'success');
        this.router.navigate(['/cms']);
      },
      error => console.log(error)
    );
  }
}
