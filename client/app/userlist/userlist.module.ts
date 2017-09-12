import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/toast/shared.module';
import { UserListComponent } from './userlist.component';
import { UserlistRoutingModule } from './userlist-routing.module';
import { PageHeaderModule } from '../shared';
import {DialogModule,ButtonModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    SharedModule,
    UserlistRoutingModule,
    DialogModule,
    ButtonModule
   
    
    
  ],
  declarations: [UserListComponent]
})
export class UserlistModule { }
