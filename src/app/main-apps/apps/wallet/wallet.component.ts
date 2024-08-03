import { Component, OnInit } from '@angular/core';
import { TRANSACTION } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  balance: number = 100;
  transactions = [
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'البيك', company: 'شركة لذة', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'وينستر', company: 'شركة لذة', amount: 20 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'بندة', company: 'شركة سهل', amount: 60 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'البيك', company: 'شركة غدف', amount: 50 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'الدانوب', company: 'شركة سهل', amount: 70 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'سابن', company: 'شركة غدف', amount: 50 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'هاف مليون', company: 'شركة لذة', amount: 25 }
  ];

  constructor(private impApiService :ImpApiService) {}

  ngOnInit(): void {

  }

  requestTransaction(): void {
  


      this.impApiService.post(TRANSACTION.requestTransaaction, '').subscribe(
        response => {
          console.log('Transaction request successfully', response);
        },
        error => {
          console.error('Error in transaction request', error);
        }
      );
    }

}
