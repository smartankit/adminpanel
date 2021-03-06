import { NgModule,Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleService } from './services/module.service';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './services/auth.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { UserService } from './services/user.service';
import { SharedPipesModule } from './shared/pipes/shared-pipes.module';
import { SharedModule } from './shared/toast/shared.module';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-4/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
    declarations: [
      
        AppComponent,
        LogoutComponent
               
        ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        SharedPipesModule,
        SharedModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
    ],
    providers: [AuthService,
        
        AuthGuardAdmin,UserService,ModuleService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
