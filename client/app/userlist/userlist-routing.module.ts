import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './userlist.component';
import { EdituserComponent } from '.././userlist/edituser/edituser.component';
import { AdduserComponent } from '.././userlist/adduser/adduser.component';
const routes: Routes = [
    { path: '', component: UserListComponent },
    { path: 'adduser', component: AdduserComponent },
    { path: 'edituser/:id', component: EdituserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlistRoutingModule { }
