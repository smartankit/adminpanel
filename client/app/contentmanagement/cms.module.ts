import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentmanagementComponent} from './contentmanagement.component';
import { CmsRoutingModule } from './cms-routing.module';
import { AddcontentComponent} from './addcontent/addcontent.component';
import { EditcontentComponent} from './editcontent/editcontent.component';
import { SharedModule } from '../shared/toast/shared.module';
import { PageHeaderModule } from '../shared';
import { PanelModule, ButtonModule,EditorModule,DialogModule } from 'primeng/primeng';
import {CommonService } from './../services/common.service';
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule,
    DialogModule,
    PageHeaderModule,EditorModule,
    PanelModule, ButtonModule,
    PanelModule,
    OrderModule,
    NgxPaginationModule
  ],
  providers:[CommonService],
  declarations: [ContentmanagementComponent,AddcontentComponent,EditcontentComponent]
})
export class CmsModule { }
