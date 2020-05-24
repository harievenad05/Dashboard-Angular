import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ButtonRendererComponent } from 'src/app/common/renderer/button-renderer.component';
import { GridOptions } from 'ag-grid-community';
import { Order, OrderData } from 'src/app/shared/order/order.model';
import { OrderService } from 'src/app/shared/order/order.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { OrderEditComponent } from './order-edit/order-edit.component';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss'],
})
export class SectionOrdersComponent implements OnInit {

  columnDefs = [
    {headerName: 'ID', field: 'order_id', sortable: true, filter: true, autoHeight: true,  width: 80, suppressSizeToFit: false},
    {headerName: 'Customers', field: 'name', sortable: true, filter: true, autoHeight: true},
    {headerName: 'Amount', field: 'total', sortable: true, filter: true, autoHeight: true},
    {headerName: 'Order Placed', field: 'placed', sortable: true, filter: true, autoHeight: true, valueFormatter: this.dateFormatter, width: 200, suppressSizeToFit: false},
    {headerName: 'Delivered', field: 'completed', sortable: true, filter: true, autoHeight: true, valueFormatter: this.dateFormatter, width: 200, suppressSizeToFit: false},
    {headerName: 'Status', field: 'status', sortable: true, filter: true, autoHeight: true, width: 169, suppressSizeToFit: false},
    {
      headerName: 'Action',
      cellRenderer: 'buttonRenderer',
      width: 150, 
      suppressSizeToFit: false,
      cellRendererParams: {
        onEditClick: this.onEditBtnClick.bind(this),
        onDeleteClick: this.onDeleteBtnClick.bind(this)
      },
      autoHeight: true,
      
    },

  ];

  style = {
    width: '100%',
    height: '100%'
  };

  rowData: any;
  frameworkComponents: any;
  gridOptions: any;
  paginationPageSize: number;
  receivedOrderData: OrderData;
  orders: Order[];
  defaultColDef: any;
  gridApi: any;

  constructor(private orderService: OrderService, private dialog: MatDialog){
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
    this.defaultColDef = { resizable: true };
  }

  ngOnInit(): void {
    this.paginationPageSize = 15;
    this.rowData = this.orders;
    this.getAllOrders();
    this.gridLayout();
  }

  getAllOrders():void {
    this.orderService.getOrders().subscribe((res: OrderData) => {
      console.log(res);
      this.receivedOrderData = res;
      if(this.receivedOrderData.success == 0){
        console.log('Not found');
      }
      this.rowData = this.receivedOrderData.data;
    }, (err) => {console.log(err)});
  }

  onResize(event) {
    console.log(event);
    event.target.innerWidth;
    this.gridLayout();
  }

  gridLayout(): void {
    this.gridOptions = <GridOptions>{
      onGridReady: (params) => {  
        this.gridApi = params.api;
        window.onresize = () => {
          this.gridApi.sizeColumnsToFit();
      }
        this.setWidthAndHeight('100%', '100%');
      }
    }
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
  
  setWidthAndHeight(width, height) {
    this.style = {
        width: width,
        height: height
    };
  }
  dateFormatter(params) {
    return moment(params.value).format('MMMM Do YYYY');
  }

  onEditBtnClick(e) {
    console.log(e.rowData); 
    const id = e.rowData.order_id
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {id}
    this.dialog.open(OrderEditComponent, dialogConfig)
  }

  onDeleteBtnClick(e){
    console.log(e.rowData);
  }
}
