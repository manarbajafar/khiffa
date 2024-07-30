import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//for login component
export class CheckTokenGuard implements CanActivate {

  constructor(private router:Router ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token =localStorage.getItem('token');

    if(token){
      const user =JSON.parse(localStorage.getItem('user'));
      if(user.user.user_type_id == 1){
        this.router.navigate(["apps/admin-dashboard/dashboard-view"]);
      }
      if(user.user.user_type_id == 2){
        this.router.navigate(["apps/driver-orders/orders"]);
      }

    }
    return true;
  }

}
