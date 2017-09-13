import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolemanagementComponent } from './rolemanagement.component';
import { RolemanagementRoutingModule } from './rolemanagement-routing.module';
import { PageHeaderModule } from '../shared';
import { SharedModule } from '../shared/toast/shared.module';
import { MangeroleService } from '../services/mangerole.service';
import { ModuleService } from '../services/module.service';

@NgModule({
  imports: [
    CommonModule,
    RolemanagementRoutingModule,
    PageHeaderModule,
    SharedModule
  
  ],
  declarations: [RolemanagementComponent],
  providers:[MangeroleService,ModuleService]
})
export class RolemanagementModule { }
