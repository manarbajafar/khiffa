import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {

      const user =JSON.parse(localStorage.getItem('user'));

      if(user){
        if(user.user.user_type_id == 1){
          this.router.navigate(["apps/admin-dashboard/dashboard-view"]);
        }
        if(user.user.user_type_id == 2){
          this.router.navigate(["apps/driver-orders/orders"]);
        }
      }
      else{
        this.router.navigate(["auth/login"]);
      }


    }, 3000);
  }

}
