import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliverymanGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    let check = true
    if (user.user.user_type_id !== 2) {
      this.router.navigate(["auth/not-found"]);
      check = false

    }

    return true;

  }

}
