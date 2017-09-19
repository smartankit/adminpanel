import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardAdmin implements CanActivate {

  constructor(public auth: AuthService, private router: Router) {}

 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isAdmin) {
        return true;
    }
    if (this.auth.loggedIn) {
        return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
}

}
