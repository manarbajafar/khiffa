import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  showConfirmationForm = false;

  constructor(private modalService: NgbModal) { }

  openModal(template: any): void {
    this.modalService.open(template, { size: 'sm' })
  }
  test(template){

  }

  confirmLogout(): void {
    this.showConfirmationForm = true;
    this.modalService.dismissAll()
  }
}
