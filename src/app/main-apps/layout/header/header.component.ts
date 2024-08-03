import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name= '';
  email='';

  constructor() { }

  ngOnInit(): void {
    this.setHeader();
  }

setHeader (){
var user= JSON.parse(localStorage.getItem('user'));
// this.name=user?.info?.name;
this.name = user?.info?.name ?? 'Admin';
this.email=user.user.email;
}
}
