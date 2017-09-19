import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/toast/shared.module';
import { UserListComponent } from './userlist.component';
import { UserlistRoutingModule } from './userlist-routing.module';
import { PageHeaderModule } from '../shared';
import {DialogModule,ButtonModule} from 'primeng/primeng';
import { EdituserComponent } from '.././userlist/edituser/edituser.component';
import { AdduserComponent } from '.././userlist/adduser/adduser.component';
import { MangeroleService } from '../services/mangerole.service';
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    SharedModule,
    UserlistRoutingModule,
    DialogModule,
    ButtonModule,
    OrderModule,
    NgxPaginationModule
    
    
  ],
  providers:[MangeroleService],
  declarations: [UserListComponent, EdituserComponent, AdduserComponent]
})
export class UserlistModule { }
