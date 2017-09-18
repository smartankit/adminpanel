import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { RolemanageComponent } from './rolemanage/rolemanage.component';
import { OrderModule } from 'ngx-order-pipe';

//import { AuthGuard } from './shared';
//import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthGuardAdmin]
    },
    
    { path: 'logout', component: LogoutComponent },
    { path: 'rolemanage',loadChildren:'./rolemanage/rolemanage.module#RolemanageModule'},
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'userlist', loadChildren: './userlist/userlist.module#UserlistModule' },
    { path: 'cms', loadChildren: './contentmanagement/cms.module#CmsModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{ enableTracing: false } )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
