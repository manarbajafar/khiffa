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
this.name=user.info.name;
console.log(this.name)
this.email=user.user.email;
}
}
