import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { right } from '@popperjs/core';
import * as echarts from 'echarts';
import { ADMIN_DASHBOARD } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { data_order } from './data';
import moment from 'moment';

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
    { name: 'غَدَف', providers_number: 0, icon: 'bx bx-leaf', key: 'Ghadaf' },
    { name: 'سهّل', providers_number: 0, icon: 'bx bx-store', key: 'Sahel' },

  ];

  dliveryman_number = 0;

  companyNames = {
    Lazza: 'شركة لذّة',
    Ghadaf: 'شركة غَدف',
    Sahel: 'شركة سهّل'
  };


  dateRangeForm: FormGroup;


  constructor(private impApiService: ImpApiService, private formBuilder: FormBuilder) {

    const today = new Date();
    const lastYearToday = new Date();
    lastYearToday.setFullYear(today.getFullYear() - 1);

    this.dateRangeForm = this.formBuilder.group({
      start: [lastYearToday],
      end: [today]
    });


  }

  ngOnInit(): void {
    this.getdliverymanNumbers();
    this.getCountServiceProvidersByCompany();

    this.getAllOrders();

    this.getEveryCompanyChartData();
    this.getAllCompaniesChartData();
    this.getTimelineChartData();

  }

  //for cards
  getCountServiceProvidersByCompany(): void {
    this.impApiService.get(ADMIN_DASHBOARD.countServiceProvidersByCompany).subscribe(data => {

      data.forEach(item => {
        const company = this.companiesCards.find(c => c.key === item.company_Name);
        if (company) {
          company.providers_number = item.Service_Providers;
        }
      });
    }, error => {
    });
  }

  getdliverymanNumbers() {
    this.impApiService.get(ADMIN_DASHBOARD.countDelivery).subscribe(data => {
      this.dliveryman_number = data;
    }, error => {
    });
  }

  //charts
  getEveryCompanyChartData(): void {
    this.impApiService.get(ADMIN_DASHBOARD.countOrderByCompany).subscribe(data => {
      // console.log(data);
      this.EveryCompanyChart(data);
    }, error => {
      console.log(error.message);
    });
  }

  EveryCompanyChart(data): void {
    const chartDom = document.getElementById('every-company');
    const myChart = echarts.init(chartDom);
    const sourceData = data.map(item => {
      return {
        product: this.companyNames[item['company Name']],
        'عدد الطلبات المقبولة': item['status counts'].InProgress,
        'عدد الطلبات المعلقة': item['status counts'].Pending,
        'عدد الطلبات التامة': item['status counts'].Completed,
        'عدد الطلبات الملغية': item['status counts'].Cancelled
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


  getAllCompaniesChartData(): void {
    this.impApiService.get(ADMIN_DASHBOARD.countAllOrder).subscribe(data => {
      // console.log(data);
      this.AllCompaniesChart(data);
    }, error => {
      console.log(error.message);
    });
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
          { product: 'عدد الطلبات', 'عدد الطلبات المقبولة': data.Accepted, 'عدد الطلبات المعلقة': data.Pending, 'عدد الطلبات التامة': data.Completed, 'عدد الطلبات الملغية': data.Cancelled },
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



  getTimelineChartData(): void {
    this.showLoader = true;
    // console.log('showLoader', this.showLoader);
    this.impApiService.get(ADMIN_DASHBOARD.timeline).subscribe(data => {
      // console.log(data);
      this.TimelineChart(data);
      this.showLoader = false;
      // console.log('showLoader', this.showLoader);
    }, error => {
      console.log(error.message);
    });
  }

  TimelineChart(data): void {
    const chartDom3 = document.getElementById('timeline');
    const myChart3 = echarts.init(chartDom3);
    // console.log(data);

    const lazzaData = data.find(item => item.company_name === 'Lazza').monthly_order_counts;
    const ghadafData = data.find(item => item.company_name === 'Ghadaf').monthly_order_counts;
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
        data: [this.companyNames.Lazza, this.companyNames.Ghadaf, this.companyNames.Sahel],
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
          name: this.companyNames.Ghadaf,
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
