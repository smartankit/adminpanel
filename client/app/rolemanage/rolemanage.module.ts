import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolemanageRoutingModule } from './rolemanage-routing.module';
import { RolemanageComponent } from './rolemanage.component';
@NgModule({
  imports: [
    CommonModule,
    RolemanageRoutingModule
  ],
  declarations: [RolemanageComponent]
})
export class RolemanageModule { }
