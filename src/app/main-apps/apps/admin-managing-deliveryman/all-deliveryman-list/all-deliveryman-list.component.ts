import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-all-deliveryman-list',
  templateUrl: './all-deliveryman-list.component.html',
  styleUrls: ['./all-deliveryman-list.component.scss']
})
export class AllDeliverymanListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }

}
