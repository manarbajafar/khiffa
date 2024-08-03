import { Router } from '@angular/router';
import { NgxSpinnerComponent, NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Component, Input, OnInit } from '@angular/core';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { ADMIN_MANAGING_DELIVERYMANS } from 'src/app/constant/routes';


@Component({
  selector: 'app-deliveryman-list',
  templateUrl: './deliveryman-list.component.html',
  styleUrls: ['./deliveryman-list.component.scss']
})
export class DeliverymanListComponent implements OnInit {
  @Input() displayCount: number = 0;
  @Input() showAll: boolean = false;

  users: any[] = [];
  displayUsers: any[] = [];
  searchTerm: string = '';

  constructor(private impApiService: ImpApiService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {

    this.getUsers();
  }

  getUsers(): void {
  this.spinner.show();
  this.impApiService.get(`${ADMIN_MANAGING_DELIVERYMANS.getDeliverymanList}?page=${1}&perPage=${2}`).subscribe(data=>{
    this.users=data.data;
    this.spinner.hide();
    console.log('this.users', this.users)
    this.updateDisplayUsers();
  },
  error => {
    this.spinner.hide()
    console.error('Error get users:', error);
  });

}


////
viewacountDetails(userId: number): void {
  console.log(userId)
  this.router.navigate(['apps/driver-orders/detailed-order/', userId]);
}

  updateDisplayUsers(): void {

    let filteredUsers = this.users.filter(user =>
      user.info[0]?.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
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



  editUser(user): void {
  }


}
