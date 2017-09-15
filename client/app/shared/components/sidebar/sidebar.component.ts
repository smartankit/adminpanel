import { Component } from '@angular/core';
import { ModuleService } from '../../../services/module.service';
import { AuthService } from '../../../services/auth.service';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    constructor(private moduleService: ModuleService,private auth: AuthService) { 


        console.log(this.auth.currentUser.role)
    }
    


    
    isActive = false;
    showMenu = '';
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
