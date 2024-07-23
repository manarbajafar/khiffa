import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-deliveryman-list',
  templateUrl: './deliveryman-list.component.html',
  styleUrls: ['./deliveryman-list.component.scss']
})
export class DeliverymanListComponent implements OnInit {
  @Input() displayCount: number = 0;
  @Input() showAll: boolean = false;

  users: User[] = [];
  displayUsers: User[] = [];
  searchTerm: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.updateDisplayUsers();
  }

  updateDisplayUsers(): void {
    let filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    if (this.showAll) {
      this.displayUsers = filteredUsers;
    } else {
      this.displayUsers = filteredUsers.slice(0, this.displayCount);
    }
  }

  onSearchTermChange(): void {
    this.updateDisplayUsers();
  }



  editUser(user: User): void {
  }


}
