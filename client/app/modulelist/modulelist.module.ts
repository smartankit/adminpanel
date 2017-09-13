import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../shared';
import { ModulelistRoutingModule } from './modulelist-routing.module';
import { ModulelistComponent } from './modulelist.component';
import { SharedModule } from '../shared/toast/shared.module';
import { ModuleService } from '../services/module.service';
import {DialogModule,ButtonModule} from 'primeng/primeng';
@NgModule({
  imports: [
    CommonModule,
    ModulelistRoutingModule,
    PageHeaderModule,
    SharedModule,
    DialogModule,
    ButtonModule
  ],
  providers:[ModuleService],
  declarations: [ModulelistComponent]
})
export class ModulelistModule { }
