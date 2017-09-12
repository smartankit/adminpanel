import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolemanageComponent } from './rolemanage.component';


const routes: Routes = [
  { path: '', component: RolemanageComponent }

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RolemanageRoutingModule { }
