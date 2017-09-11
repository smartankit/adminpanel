import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/toast/shared.module';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { PageHeaderModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    SharedModule,
    AccountRoutingModule
    
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
