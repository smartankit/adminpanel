import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentmanagementComponent} from './contentmanagement.component';
import { CmsRoutingModule } from './cms-routing.module';
import { AddcontentComponent} from './addcontent/addcontent.component';
import { EditcontentComponent} from './editcontent/editcontent.component';
@NgModule({
  imports: [
    CommonModule,
    CmsRoutingModule
  ],
  declarations: [ContentmanagementComponent,AddcontentComponent,EditcontentComponent]
})
export class CmsModule { }
