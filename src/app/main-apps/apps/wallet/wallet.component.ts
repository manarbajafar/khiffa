import { Component, OnInit, ViewChild } from '@angular/core';
import { TRANSACTION } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { DRIVERPROFILE } from 'src/app/constant/routes';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  wallet: any;
  canRequestTransaction: boolean = false;
  transactions: any;
  displayedColumns: string[] = ['amount', 'provider', 'company', 'date', 'id'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  transactionsFake: any[] = [

    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'البيك', company: 'شركة لذة', amount: 30 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'وينستر', company: 'شركة لذة', amount: 20 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'بندة', company: 'شركة سهل', amount: 60 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'البيك', company: 'شركة غدف', amount: 50 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'الدانوب', company: 'شركة سهل', amount: 70 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'سابن', company: 'شركة غدف', amount: 50 },
    { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'هاف مليون', company: 'شركة لذة', amount: 25 }
  ];


  constructor(private impApiService: ImpApiService) { }

  ngOnInit() {
    this.loadDriverWallet();
      this.dataSource = new MatTableDataSource(this.transactionsFake);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.updateTransactionAbility();
    }
    updateTransactionAbility() {
      this.canRequestTransaction = this.wallet && this.wallet.amount > 200;
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }


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
               this.wallet= [];
              this.transactions=[];
            }
          );
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
