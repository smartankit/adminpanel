import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
import { OrderModule } from 'ngx-order-pipe';
import { OrderByPipe } from '../order-by.pipe';

//import {SidebarModule } from '../shared/components/sidebar/sidebar.module';
@NgModule({
    imports: [
        CommonModule,
        OrderModule,
        
     //   SidebarModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        TranslateModule
    ],
    declarations: [
        OrderByPipe,
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        
    ]
})
export class LayoutModule { }
