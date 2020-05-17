import { Component, OnInit } from '@angular/core';
import { order } from '../../shared/order';
import * as moment from 'moment';
import { ButtonRendererComponent } from 'src/app/common/renderer/button-renderer.component';
import { GridOptions } from 'ag-grid-community';

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
    {headerName: 'Status', field: 'status', sortable: true, filter: true, autoHeight: true, width: 102, suppressSizeToFit: false},
    {
      headerName: 'Action',
      cellRenderer: 'buttonRenderer',
      width: 98, 
      suppressSizeToFit: false,
      cellRendererParams: {
        onEditClick: this.onEditBtnClick.bind(this),
        onDeleteClick: this.onDeleteBtnClick.bind(this)
      },
      autoHeight: true
    },

  ];

  rowData: any;
  frameworkComponents: any;
  gridOptions: any;
  paginationPageSize: number;

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
  constructor(){
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
    
  }

  ngOnInit(): void {
    this.paginationPageSize = 10;
    this.rowData = this.orders
  }
  

  onEditBtnClick(e) {
    console.log(e.rowData);
    alert(e.rowData.customer.name)
  }

  onDeleteBtnClick(e){
    console.log(e.rowData);
  }
}
