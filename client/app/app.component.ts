import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/auth.service';
import { ModuleService } from './services/module.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private translate: TranslateService,public auth: AuthService,private moduleService: ModuleService) {
        translate.addLangs(['en', 'fr', 'ur', 'es']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|ur|es/) ? browserLang : 'en');
    }
    ngOnInit() {
    //check user role authentication    
    
    }
    ngAfterViewInit(){
        this.moduleService.checkModule();

    }
}
