import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/toast/shared.module';
import { UserlistComponent } from './userlist.component';
import { UserlistRoutingModule } from './userlist-routing.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserlistRoutingModule
  ],
  declarations: [UserlistComponent]
})
export class UserlistModule { }
