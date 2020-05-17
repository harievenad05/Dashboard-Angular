import { Component, OnInit } from '@angular/core';
import { order } from '../../shared/order';
import * as moment from 'moment';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss'],
})
export class SectionOrdersComponent implements OnInit {

  columnDefs = [
    {headerName: 'ID', field: 'id', sortable: true, filter: true, autoHeight: true,  width: 80, suppressSizeToFit: false},
    {headerName: 'Customers', field: 'customer.name', sortable: true, filter: true, autoHeight: true, width: 180,suppressSizeToFit: false},
    {headerName: 'Amount', field: 'total', sortable: true, filter: true, autoHeight: true,  width: 102, suppressSizeToFit: false},
    {headerName: 'Order Placed', field: 'placed', sortable: true, filter: true, autoHeight: true, cellRenderer: (data) => {
      return moment(data.placed).format('MMMM Do YYYY')
  }},
    {headerName: 'Delivered', field: 'fulfilled', sortable: true, filter: true, autoHeight: true, cellRenderer: (data) => {
      return moment(data.fulfilled).format('MMMM Do YYYY')
  }},
    {headerName: 'Status', field: 'status', sortable: true, filter: true, autoHeight: true},

  ];

  rowData: any;

  orders: order[] = [
    {
      id: 1,
      customer: {
        id: 1,
        name: 'ABC group',
        email: 'abc@example.com',
        state: 'CO',
      },
      total: 150,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'Complete',
    },
    {
      id: 2,
      customer: {
        id: 2,
        name: 'XYZ holdings',
        email: 'xyz@example.com',
        state: 'CO',
      },
      total: 230,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 3),
      status: 'Complete',
    },
    {
      id: 3,
      customer: {
        id: 3,
        name: 'Johndou group',
        email: 'accounts@johndou.com',
        state: 'CO',
      },
      total: 450,
      placed: new Date(2017, 12, 4),
      fulfilled: new Date(2017, 12, 4),
      status: 'Complete',
    },
    {
      id: 4,
      customer: {
        id: 1,
        name: 'ABC group',
        email: 'abc@example.com',
        state: 'CO',
      },
      total: 950,
      placed: new Date(2017, 12, 6),
      fulfilled: new Date(2017, 12, 6),
      status: 'Complete',
    },
    {
      id: 5,
      customer: {
        id: 1,
        name: 'ABC group',
        email: 'abc@example.com',
        state: 'CO',
      },
      total: 1078,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'Complete',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.rowData = this.orders
  }
}
