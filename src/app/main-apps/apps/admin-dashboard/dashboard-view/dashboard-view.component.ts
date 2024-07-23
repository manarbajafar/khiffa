import { Component, HostListener, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {
  isDropdownOpen = false;
  selectedItem: string | null = null;
  items = ['مكة', 'جدة', 'الكل'];

  dliveryman_number=1000;
  lazza_providers_number=300;
  ghadaf_providers_number=300;
  sahhil_providers_number=300;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.dropdown');
    if (!clickedInside) {
      this.isDropdownOpen = false;
    }
  }

  constructor() { }

  ngOnInit(): void {

    //chart for every company
    var app = {};

var chartDom = document.getElementById('every-company');
var myChart = echarts.init(chartDom);
var option;

option = {
  color: ["#DB79A9", "#87B6A1", "#F2A735", "#2D9CDB"],
  legend: {},
  tooltip: {},
  dataset: {
    dimensions: ['product', 'عدد الطلبات الملغية','عدد الطلبات التامة', 'عدد الطلبات المعلقة', 'عدد الطلبات المقبولة'],
    source: [
      { product: 'شركة غَدف', 'عدد الطلبات المقبولة': 580, 'عدد الطلبات المعلقة': 288,'عدد الطلبات التامة': 278, 'عدد الطلبات الملغية': 45 },
      { product: 'شركة سهّل', 'عدد الطلبات المقبولة': 700, 'عدد الطلبات المعلقة': 120, 'عدد الطلبات التامة': 57, 'عدد الطلبات الملغية': 268 },
      { product: 'شركة لذّة', 'عدد الطلبات المقبولة': 300, 'عدد الطلبات المعلقة': 70, 'عدد الطلبات التامة': 90, 'عدد الطلبات الملغية': 222 },
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' },{ type: 'bar' },]
};

option && myChart.setOption(option);


//chart for all companies
var chartDom2 = document.getElementById('all-companies');
var myChart2 = echarts.init(chartDom2);
var option2;

option2 = {
  color: ["#DB79A9", "#87B6A1", "#F2A735", "#2D9CDB"],
  legend: {},
  tooltip: {},
  itemStyle:{
    emphasis: {
      barBorderRadius: [50, 50]
  },
  normal: {
      barBorderRadius: [50, 50, 0 ,0 ]
  }
},
  dataset: {
    dimensions: ['product', 'عدد الطلبات الملغية','عدد الطلبات التامة', 'عدد الطلبات المعلقة', 'عدد الطلبات المقبولة'],
    source: [
      { product: 'عدد الطلبات', 'عدد الطلبات المقبولة': 580, 'عدد الطلبات المعلقة': 288,'عدد الطلبات التامة': 278, 'عدد الطلبات الملغية': 45 },

    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar' ,barWidth: '10%'}, { type: 'bar' ,barWidth: '10%'}, { type: 'bar',barWidth: '10%' },{ type: 'bar',barWidth: '10%' },]
};

option2 && myChart2.setOption(option2);


//chart for timeline of number of orders

var chartDom3 = document.getElementById('timeline');
var myChart3 = echarts.init(chartDom3);
var option3;

option3 = {
  // title: {
  //   text: 'Stacked Line'
  // },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['شركة سهّل', 'شركة غَدف', 'شركة لذّة']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
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
    data: ['ديسمبر', 'نوفمبر', 'أكتوبر', 'سبتمبر', 'أغسطس', 'يوليو', 'يونيو', 'مايو', 'أبريل', 'مارس', 'فبراير', 'يناير']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'شركة لذّة',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210, 150, 200, 160, 180, 220],
    },
    {
      name: 'شركة غَدف',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310, 240, 250, 260, 280, 300],
    },
    {
      name: 'شركة سهّل',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410, 370, 320, 300, 290, 310],
    },
  ]
};

option3 && myChart3.setOption(option3);



  }

}





