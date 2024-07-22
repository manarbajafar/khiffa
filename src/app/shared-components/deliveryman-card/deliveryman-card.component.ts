import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deliveryman-card',
  templateUrl: './deliveryman-card.component.html',
  styleUrls: ['./deliveryman-card.component.scss']
})
export class DeliverymanCardComponent implements OnInit {
  @Input() name:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
