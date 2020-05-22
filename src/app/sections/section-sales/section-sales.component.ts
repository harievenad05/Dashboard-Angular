import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order/order.service';
import { OrderData, Order } from 'src/app/shared/order/order.model';

@Component({
  selector: 'app-section-sales',
  templateUrl: './section-sales.component.html',
  styleUrls: ['./section-sales.component.scss']
})
export class SectionSalesComponent implements OnInit {

  orderDataByCustomer: any;
  salesDataByState: any;
  orders: Order[];
  receivedOrderData: OrderData;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders():void {
    this.orderService.getOrders().subscribe((res: OrderData) => {
      const localChartStateData = this.getChartStateData(res);
      const localChartCustomerData = this.getChartCustomerData(res);

      const newOrderStateData = [];
      localChartStateData.map(x => {
        newOrderStateData.push({'state': x[0], total: x[1]});
      });
      console.log(newOrderStateData);

      const newOrderCustomerData = [];
      localChartCustomerData.map(x => {
        newOrderCustomerData.push({'name': x[0], total: x[1]})
      })
      console.log(newOrderCustomerData.splice(0, 5));
      

    }, (err) => {console.log(err)});
  };

  getChartStateData(res: OrderData){
    this.receivedOrderData = res;
    const stateOrders = this.receivedOrderData.data;
    const formattedStateOrders = stateOrders.reduce((r, e) => {
      r.push([e.state, e.total]);
      return r;
    }, []);
    const p = [];
    const stateData = formattedStateOrders.reduce((r, e) => {
      const key = e[0];
      if(!p[key]){
        p[key] = e;
       r.push(p[key]);
      } else {
        p[key][1] += e[1];
      }
      return r;
    }, [])
    return stateData;
  }

  getChartCustomerData(res: OrderData){
    this.receivedOrderData = res;
    const customerOrders = this.receivedOrderData.data;
    const formattedCustomerOrders = customerOrders.reduce((r, e) => {
      r.push([e.name, e.total]);
      return r;
    }, []);
    const p = [];
    const customerData = formattedCustomerOrders.reduce((r, e) => {
      const key = e[0];
      if(!p[key]){
        p[key] = e;
       r.push(p[key]);
      } else {
        p[key][1] += e[1];
      }
      return r;
    }, []);
    return customerData;
  }
  

}
