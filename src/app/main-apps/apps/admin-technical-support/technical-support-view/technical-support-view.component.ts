import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-support-view',
  templateUrl: './technical-support-view.component.html',
  styleUrls: ['./technical-support-view.component.scss']
})
export class TechnicalSupportViewComponent implements OnInit {

  tableData = [
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "قيد الانتظار",
      statusClass: "badge-on-hold",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "مغلقة",
      statusClass: "badge-closed",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "مفتوحة",
      statusClass: "badge-open",
    },
    {
      title: "مشكلة بتحويل المستحقات",
      name: "سعد محمد",
      date: "5 يناير 2024",
      time:"3:00 م",
      id: "1234",
      status: "تحت المعالجة",
      statusClass: "badge-under-processing",
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
