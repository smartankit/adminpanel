import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentmanagementComponent} from './contentmanagement.component';
import { AddcontentComponent} from './addcontent/addcontent.component';
import { EditcontentComponent} from './editcontent/editcontent.component';
const routes: Routes = [

  {"path":"",component: ContentmanagementComponent},
  { path: 'addcontent', component: AddcontentComponent },
  { path: 'editcontent/:id', component: EditcontentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
