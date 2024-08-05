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
  // balance: number = 100;
  displayedColumns = ['id',  'first_name', 'last_name', 'email','avatar'];


  @ViewChild(MatSort) sort: MatSort;
   @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;
     totalData = null;
    pageSizes = [3, 5, 7];

  transactions_fake= [
    // { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'البيك', company: 'شركة لذة', amount: 30 },
    // { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'وينستر', company: 'شركة لذة', amount: 20 },
    // { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'بندة', company: 'شركة سهل', amount: 60 },
    // { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'البيك', company: 'شركة غدف', amount: 50 },
    // { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'الدانوب', company: 'شركة سهل', amount: 70 },
    // { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'سابن', company: 'شركة غدف', amount: 50 },
    // { id: '#12548796', date: '28 يوليو 2024', time: '12:30 ص', provider: 'هاف مليون', company: 'شركة لذة', amount: 25 }
  ];

//   constructor(private impApiService :ImpApiService) {}

//   ngOnInit(): void {
//     this.loadDriverWallet(),
//     this.requestTransaction();

//   }

//   requestTransaction(): void {



//       this.impApiService.post(TRANSACTION.requestTransaaction, '').subscribe(
//         response => {
//           console.log('Transaction request successfully', response);
//         },
//         error => {
//           console.error('Error in transaction request', error);
//         }
//       );
//     }
//     wallet  =null;
// transactions= null;
//     loadDriverWallet(): void {
//       this.impApiService.get(DRIVERPROFILE.wallet).subscribe(
//         (response) => {
//         this.wallet = response.wallet;
//         console.log("wallet loaded:", this.wallet);
//         this.transactions = response.tranactin;
//         console.log("transaction loaded:", this.transactions.data);
//         },
//         (error) => {
//           console.error("Error fetching driver wallet:", error);
//           // this.wallet= [];
//           this.transactions=[];
//         }
//       );
//     }
// }

constructor(private impApiService: ImpApiService,) { }

  getTableData$(pageNumber: Number, pageSize: Number) {
    return this.impApiService.getEmployees(pageNumber, pageSize);
  }


  ngOnInit(): void {

    this.getTableData$(1, 3).subscribe(data => {
      this.dataSource = new MatTableDataSource(data.data);
      this.totalData = data.total;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


  applyFilterInput = '';
  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  changePage(data) {
    this.getTableData$(data.pageIndex, data.pageSize)
  }
}
