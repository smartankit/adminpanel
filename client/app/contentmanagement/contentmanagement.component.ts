import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModuleService } from '../services/module.service';
import { ToastComponent } from './../shared/toast/toast.component';
import { CommonService } from './../services/common.service';
import { routerTransition } from '../router.animations';
@Component({
  selector: 'app-contentmanagement',
  templateUrl: './contentmanagement.component.html',
  styleUrls: ['./contentmanagement.component.scss'],
  animations: [routerTransition()]
})
export class ContentmanagementComponent implements OnInit {

  constructor(public auth: AuthService, private moduleService: ModuleService, public toast: ToastComponent, private commonService: CommonService) { }
  pages = [];
 
  pagedata: Array<any> = [];
  display = false;
  isLoading =true;
  ngOnInit() {
    //check user role authentication    
    this.moduleService.checkModule();
    this.getPages();

  }
  getPages() {
    this.commonService.getPages().subscribe(
      pages => this.pages = pages,
      error => console.log(error),
      () => this.isLoading =false
    )
  }

  deletePage(page) {
    this.commonService.deleteContent(page).subscribe(
      data => this.toast.setMessage('page deleted successfully.', 'success'),
      error => console.log(error),
      () => this.getPages()
    );
  }
  getPage(pageID) {
    console.log(pageID);
    this.commonService.getPage(pageID).subscribe(

      (data) => {

        this.pagedata = data
        this.showDialog();
        //this.refresh() should work here
      },
      error => console.log(error)

    );
  }
  showDialog() {

    this.display = true;
  }

}

