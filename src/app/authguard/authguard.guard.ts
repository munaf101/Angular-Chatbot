// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';

// export const authguardGuard: CanActivateFn = (route, state) => {

//   // return true;
// };


import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { AuthService } from '../services/auth.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiauthService } from '../Service/apiauth.service';

@Injectable({ providedIn: 'root' })
export class authguardGuard implements CanActivate {
  constructor(private authService: ApiauthService, private router: Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    
    // Redirect to login page if not authenticated
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
