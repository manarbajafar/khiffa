import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliveryman-card',
  templateUrl: './deliveryman-card.component.html',
  styleUrls: ['./deliveryman-card.component.scss']
})
export class DeliverymanCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() userId: number | undefined;
  @Input() status_type_id: number | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  editUser(): void {
    if (this.userId) {
      this.router.navigate([`apps/admin-managing-deliveryman/request-details`, this.userId], { queryParams: { status: this.status_type_id } });
    }
  }


}
