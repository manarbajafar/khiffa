import { Component, OnInit } from '@angular/core';
import { TRANSACTION } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { DRIVERPROFILE } from 'src/app/constant/routes';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  // balance: number = 100;
  transactions_fake= [
    // { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'البيك', company: 'شركة لذة', amount: 30 },
    // { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'وينستر', company: 'شركة لذة', amount: 20 },
    // { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'بندة', company: 'شركة سهل', amount: 60 },
    // { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'البيك', company: 'شركة غدف', amount: 50 },
    // { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'الدانوب', company: 'شركة سهل', amount: 70 },
    // { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'سابن', company: 'شركة غدف', amount: 50 },
    // { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'هاف مليون', company: 'شركة لذة', amount: 25 }
  ];

  constructor(private impApiService :ImpApiService) {}

  ngOnInit(): void {
    this.loadDriverWallet(),
    this.requestTransaction();

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
    wallet  =null;
transactions= null;
    loadDriverWallet(): void {
      this.impApiService.get(DRIVERPROFILE.wallet).subscribe(
        (response) => {
        this.wallet = response.wallet;
        console.log("wallet loaded:", this.wallet);
        this.transactions = response.tranactin;
        console.log("transaction loaded:", this.transactions.data);
        },
        (error) => {
          console.error("Error fetching driver wallet:", error);
          // this.wallet= [];
          this.transactions=[];
        }
      );
    }
}
