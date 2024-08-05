import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { right } from '@popperjs/core';
import * as echarts from 'echarts';
import { ADMIN_DASHBOARD } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';
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
  city = '';
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

  //for datapicker
  maxDate = new Date(); //today date
  minDate = new Date();



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
      if (val.start !== null && val.end !== null) {
        this.getDashboardData(start, end);
      }
    });

    const initialStart = moment(this.dateRangeForm.value.start).format('YYYY-MM-DD');
    const initialEnd = moment(this.dateRangeForm.value.end).format('YYYY-MM-DD');

    //call api with intial dates
    this.getDashboardData(initialStart, initialEnd);


    //assign min date to datepicker
    this.getOldestOrderDate();
  }

  getDashboardData(start: string, end: string): void {

    this.spinner.show();

    this.impApiService.get(`${ADMIN_DASHBOARD.getDashboardData}start_date=${start} 00:00:00&end_date=${end} 23:59:59&city=${this.city}`).subscribe(data => {

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
      this.TimelineChart(data.time_line);

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

    const defaultStatusCounts = { pending: 0, in_progress: 0, completed: 0, cancelled: 0 };

    const sourceData = Object.keys(this.companyNames).map(companyName => {
      const companyData = data.find(item => item.company_Name === companyName);

      if (companyData) {
        return {
          product: this.companyNames[companyData.company_Name],
          'عدد الطلبات المقبولة': companyData.status_counts.in_progress,
          'عدد الطلبات المعلقة': companyData.status_counts.pending,
          'عدد الطلبات التامة': companyData.status_counts.completed,
          'عدد الطلبات الملغية': companyData.status_counts.cancelled
        };
      } else {
        return {
          product: this.companyNames[companyName],
          'عدد الطلبات المقبولة': defaultStatusCounts.in_progress,
          'عدد الطلبات المعلقة': defaultStatusCounts.pending,
          'عدد الطلبات التامة': defaultStatusCounts.completed,
          'عدد الطلبات الملغية': defaultStatusCounts.cancelled
        };
      }
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
      color: ["#87B6A1", "#DB79A9", "#2D9CDB", "#F2A735"],
      legend: {
        bottom: 0,
        align: 'right',
        orient: "vertical",
        height: "10%",
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
        dimensions: ['product', 'الطلبات التامة', 'الطلبات الملغية', 'الطلبات المقبولة', 'الطلبات المعلقة'],
        source: [
          { product: 'عدد الطلبات', 'الطلبات المعلقة': data.pending, 'الطلبات المقبولة': data.in_progress, 'الطلبات الملغية': data.cancelled, 'الطلبات التامة': data.completed },
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

    const labelTranslations = {
      'Jan': 'يناير',
      'Feb': 'فبراير',
      'Mar': 'مارس',
      'Apr': 'أبريل',
      'May': 'مايو',
      'Jun': 'يونيو',
      'Jul': 'يوليو',
      'Aug': 'أغسطس',
      'Sep': 'سبتمبر',
      'Oct': 'أكتوبر',
      'Nov': 'نوفمبر',
      'Dec': 'ديسمبر'
    };

    const labels = data.labels.map(label => labelTranslations[label] || label);

    const lazzaData = data.data.find(item => item.company_name === 'Lazza')?.values;;
    const ghadafData = data.data.find(item => item.company_name === 'ghadaf')?.values;
    const sahelData = data.data.find(item => item.company_name === 'Sahel')?.values;

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
        data:labels,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        },
        // axisLabel: {
        //   rotate: 45,
        // },
        inverse: true
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
          data: sahelData ? sahelData : [],
          smooth: true,
        },
        {
          name: this.companyNames.ghadaf,
          type: 'line',
          stack: 'Total',
          data: ghadafData ? ghadafData : [],
          smooth: true,
        },
        {
          name: this.companyNames.Lazza,
          type: 'line',
          stack: 'Total',
          data: lazzaData ? lazzaData : [],
          smooth: true,
        },
      ]
    };

    option3 && myChart3.setOption(option3);
  }


  getOldestOrderDate(){
    this.spinner.show();
    this.impApiService.get(ADMIN_DASHBOARD.getOldestOrderDate).subscribe(data=>{
      this.minDate=data; // when i wrote this, there is no orders in db
      this.spinner.hide();
    },
    error => {
      this.spinner.hide()
      console.error('Error get users:', error);
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectItem(item: string) {
    this.selectedItem = item;
    if (item == 'مكة')
      this.city = 'makkah';
    else if (item == 'جدة')
      this.city = 'jeddah';
    else
      this.city = '';

    this.isDropdownOpen = false;

    const start = moment(this.dateRangeForm.value.start).format('YYYY-MM-DD');
    const end = moment(this.dateRangeForm.value.end).format('YYYY-MM-DD');

    this.getDashboardData(start, end);

    this.toggleDropdown();


  }





  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.dropdown');
    if (!clickedInside) {
      this.isDropdownOpen = false;
    }
  }

}
