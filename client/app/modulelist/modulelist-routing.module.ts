import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulelistComponent } from './modulelist.component';


const routes: Routes = [
  { path: '', component: ModulelistComponent }

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModulelistRoutingModule { }
