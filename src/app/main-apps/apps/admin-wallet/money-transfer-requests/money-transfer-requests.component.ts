import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-transfer-requests',
  templateUrl: './money-transfer-requests.component.html',
  styleUrls: ['./money-transfer-requests.component.scss']
})
export class MoneyTransferRequestsComponent implements OnInit {
  requests=
  [{ id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'خالد عمر', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'احمد محمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'سعيد احمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'خالد عمر', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'احمد محمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'سعيد احمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'خالد عمر', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'احمد محمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'سعيد احمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'خالد عمر', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'احمد محمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'سعيد احمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'سعيد احمد', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', name: 'سعيد احمد', amount: 30 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
