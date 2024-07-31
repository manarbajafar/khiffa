import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { right } from '@popperjs/core';
import * as echarts from 'echarts';
import { ADMIN_DASHBOARD } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { data_order } from './data';
import moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class DashboardViewComponent implements OnInit {
  isDropdownOpen = false;
  selectedItem: string | null = null;
  items = ['مكة', 'جدة', 'الكل'];

  showLoader = false;

  companiesCards = [
    { name: 'لذّة', providers_number: 0, icon: 'bx bx-restaurant', key: 'Lazza' },
    { name: 'غَدَف', providers_number: 0, icon: 'bx bx-leaf', key: 'ghadaf' },
    { name: 'سهّل', providers_number: 0, icon: 'bx bx-store', key: 'Sahel' },

  ];

  dliveryman_number = 0;

  companyNames = {
    Lazza: 'شركة لذّة',
    ghadaf: 'شركة غَدف',
    Sahel: 'شركة سهّل'
  };


  dateRangeForm: FormGroup;


  constructor(private impApiService: ImpApiService, private formBuilder: FormBuilder, private spinner: NgxSpinnerService) {

    //default value
    const today = new Date();
    const lastYearToday = new Date();
    lastYearToday.setFullYear(today.getFullYear() - 1);

    this.dateRangeForm = this.formBuilder.group({
      start: [lastYearToday],
      end: [today]
    });


  }

  ngOnInit(): void {
    //when user choose date
    this.dateRangeForm.valueChanges.subscribe(val => {
      const start = moment(val.start).format('YYYY-MM-DD');
      const end = moment(val.end).format('YYYY-MM-DD');
      //call api
      this.getDashboardData(start, end);
    });

    const initialStart = moment(this.dateRangeForm.value.start).format('YYYY-MM-DD');
    const initialEnd = moment(this.dateRangeForm.value.end).format('YYYY-MM-DD');

    //call api with intial dates
    this.getDashboardData(initialStart, initialEnd);
  }

  getDashboardData(start: string, end: string) : void{

    // this.spinner.show();

    this.impApiService.get(`${ADMIN_DASHBOARD.getDashboardData}start_date=${start} 00:00:00&end_date=${end} 23:59:59`).subscribe(data => {

      //get dliveryman_number numbers
      this.dliveryman_number = data.delivery_Count;

      //get Service Providers counts By Company
      data.service_Providers.forEach(item => {
        const company = this.companiesCards.find(c => c.key === item.company_Name);
        if (company) {
          company.providers_number = item.Service_Providers;
        }
      });

      //charts
      this.EveryCompanyChart(data.order_Counts_By_Company);
      this.AllCompaniesChart(data.all_Order_Counts);
      this.TimelineChart(data.Time_line);

      this.spinner.hide();

    }, error => {
      console.log(error.message);
      this.spinner.hide();
    });
  }



  //charts

  EveryCompanyChart(data): void {
    const chartDom = document.getElementById('every-company');
    const myChart = echarts.init(chartDom);
    const sourceData = data.map(item => {
      return {
        product: this.companyNames[item.company_Name],
        'عدد الطلبات المقبولة': item.status_counts.InProgress, // in api wrote this "In Progress"
        'عدد الطلبات المعلقة': item.status_counts.Pending,
        'عدد الطلبات التامة': item.status_counts.Completed,
        'عدد الطلبات الملغية': item.status_counts.Cancelled
      };
    });

    const option = {
      textStyle: {
        fontFamily: 'tajawal',
      },
      color: ["#DB79A9", "#87B6A1", "#F2A735", "#2D9CDB"],
      legend: {
        bottom: 0,
        itemGap: 50,
        align: 'right',
      },
      tooltip: {},
      grid: {
        top: '5%',
        bottom: '20%',
      },
      dataset: {
        dimensions: ['product', 'عدد الطلبات الملغية', 'عدد الطلبات التامة', 'عدد الطلبات المعلقة', 'عدد الطلبات المقبولة'],
        source: sourceData
      },
      xAxis: {
        type: 'category',
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
          },
        },
      },
      yAxis: {
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
          },
        },
        position: 'right',
      },
      series: [
        { type: 'bar', barWidth: '10%', itemStyle: { barBorderRadius: [50, 50, 0, 0] } },
        { type: 'bar', barWidth: '10%', itemStyle: { barBorderRadius: [50, 50, 0, 0] } },
        { type: 'bar', barWidth: '10%', itemStyle: { barBorderRadius: [50, 50, 0, 0] } },
        { type: 'bar', barWidth: '10%', itemStyle: { barBorderRadius: [50, 50, 0, 0] } }
      ]
    };

    option && myChart.setOption(option);
  }



  AllCompaniesChart(data): void {
    //chart for all companies
    var chartDom2 = document.getElementById('all-companies');
    var myChart2 = echarts.init(chartDom2);
    var option2;

    option2 = {
      textStyle: {
        fontFamily: 'tajawal'
      },
      color: ["#DB79A9", "#87B6A1", "#F2A735", "#2D9CDB"],
      legend: {
        bottom: 0,
        align: right,
      },
      tooltip: {},
      grid: {
        top: '5%',
        bottom: '20%'
      },
      itemStyle: {
        emphasis: {
          barBorderRadius: [50, 50]
        },
        normal: {
          barBorderRadius: [50, 50, 0, 0]
        }
      },
      dataset: {
        dimensions: ['product', 'عدد الطلبات الملغية', 'عدد الطلبات التامة', 'عدد الطلبات المعلقة', 'عدد الطلبات المقبولة'],
        source: [
          //data.Accepted = data['In Progress'] , wait backend to change
          { product: 'عدد الطلبات', 'عدد الطلبات المقبولة': data.status_counts.in_progress, 'عدد الطلبات المعلقة': data.status_counts.pending, 'عدد الطلبات التامة': data.status_counts.completed, 'عدد الطلبات الملغية': data.status_counts.cancelled },
        ]
      },
      xAxis: {
        type: 'category',
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      yAxis: {
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        },
        position: 'right',
      },

      series: [
        { type: 'bar', barWidth: '10%', itemStyle: { barBorderRadius: [50, 50, 0, 0] } },
        { type: 'bar', barWidth: '10%', itemStyle: { barBorderRadius: [50, 50, 0, 0] } },
        { type: 'bar', barWidth: '10%', itemStyle: { barBorderRadius: [50, 50, 0, 0] } },
        { type: 'bar', barWidth: '10%', itemStyle: { barBorderRadius: [50, 50, 0, 0] } },]
    };

    option2 && myChart2.setOption(option2);
  }



  TimelineChart(data): void {
    const chartDom3 = document.getElementById('timeline');
    const myChart3 = echarts.init(chartDom3);
    // console.log(data);

    const lazzaData = data.find(item => item.company_name === 'Lazza').monthly_order_counts;
    const ghadafData = data.find(item => item.company_name === 'ghadaf').monthly_order_counts;
    const sahelData = data.find(item => item.company_name === 'Sahel').monthly_order_counts;
    // console.log('lazza data ', lazzaData);

    const option3 = {
      textStyle: {
        fontFamily: 'tajawal'
      },
      color: ["#FF8144", "#00224D", "#FF204E"],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: [this.companyNames.Lazza, this.companyNames.ghadaf, this.companyNames.Sahel],
        bottom: 0,
        icon: 'roundRect',
        itemGap: 50,
        align: 'right',
      },
      grid: {
        top: '5%',
        left: '3%',
        right: '4%',
        bottom: '20%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['ديسمبر', 'نوفمبر', 'أكتوبر', 'سبتمبر', 'أغسطس', 'يوليو', 'يونيو', 'مايو', 'أبريل', 'مارس', 'فبراير', 'يناير'],
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        },
        position: 'right',
      },
      series: [
        {
          name: this.companyNames.Sahel,
          type: 'line',
          stack: 'Total',
          data: sahelData,
          smooth: true,
        },
        {
          name: this.companyNames.ghadaf,
          type: 'line',
          stack: 'Total',
          data: ghadafData,
          smooth: true,
        },
        {
          name: this.companyNames.Lazza,
          type: 'line',
          stack: 'Total',
          data: lazzaData,
          smooth: true,
        },
      ]
    };

    option3 && myChart3.setOption(option3);
  }


  getAllOrders() {
    var data = data_order
    console.log(data)


    var city = data.filter((obj, index) => {
      return index == data.findIndex(o => obj.address.city == o.address.city)
    }).map(d => d.address)

    var date = data.filter((obj, index) => {
      return index == data.findIndex(o => obj.created_at == o.created_at)
    }).map(d => d.created_at)


    let arrayListDate = [];

    for (let value of date) {
      arrayListDate.push(moment(value).format('YYYY-MM-DD'))
    }



    // get orders depand on city
    city.forEach((element: any) => {
      element.orders = []
      element.orders = data.filter(d => d.address.city == element.city)
    });

    console.log(city)
    console.log(arrayListDate)

    this.impApiService.get(ADMIN_DASHBOARD.getAllOrders).subscribe(d => {


    })
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.isDropdownOpen = false;

    var city = '';
    if (item == 'مكة')
      city = 'makkah';
    else if (item == 'جدة')
      city = 'jeddah';
    else
      city = 'all';

    this.postCityforFilter(city);
  }

  postCityforFilter(item) {
    // this.impApiService.post(ADMIN_DASHBOARD.index + "?Address=" + this.selectItem, {})
  }



  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.dropdown');
    if (!clickedInside) {
      this.isDropdownOpen = false;
    }
  }

}
