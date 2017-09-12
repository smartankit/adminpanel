import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../shared';
import { RolemanageRoutingModule } from './rolemanage-routing.module';
import { RolemanageComponent } from './rolemanage.component';
import { SharedModule } from '../shared/toast/shared.module';
import { MangeroleService } from '../services/mangerole.service';
@NgModule({
  imports: [
    CommonModule,
    RolemanageRoutingModule,
    PageHeaderModule,
    SharedModule
  ],
  providers:[MangeroleService],
  declarations: [RolemanageComponent]
})
export class RolemanageModule { }
