import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {
  request = {
    name: 'خالد عمر محمد',
    email: 'www@gmail.com',
    idNumber: '1111111111',
    phoneNumber: '0555555555',
    attachments: [
      { url: 'assets/images/test1.png' },
      { url: 'assets/images/test2.png' },
      { url: 'assets/images/test3.png' }
    ],
    modificationRequest: { url: 'assets/images/test2.png' },
    type: 1
  };


  constructor() {}

  ngOnInit(): void {

  }


}
