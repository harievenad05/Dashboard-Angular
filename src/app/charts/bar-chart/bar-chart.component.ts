import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import * as moment from 'moment';

import { OrderService } from 'src/app/shared/order/order.service';
import { Order, OrderData } from 'src/app/shared/order/order.model';

// const SAMPLE_DATA: any[] = [
//   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Q3 Sales' },
//   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Q4 Sales' },
// ];

// const SAMPLE_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {

  orders: Order[];
  receivedOrderData: OrderData;
  orderLabels: string[];
  orderData: number[];

  public barChartOptions: any = {
    responsive: true,
    scaleShowVerticalLines: true,
  };
  public barChartLabels: string[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  public barChartData: any[];
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders():void {
    this.orderService.getOrders().subscribe((res) => {
      const localChartData = this.getChartData(res);
      this.barChartLabels = localChartData.map(x => x[0]);
      this.barChartData = [{'data': localChartData.map(x => x[1]), 'label': 'Sales'}]
    }, (err) => {console.log(err)});
  }

  getChartData(res: OrderData) {
    this.receivedOrderData = res;
    const chartOrders = this.receivedOrderData.data;
    const data = chartOrders.map(o => o.total);
    const label = chartOrders.map(o => moment(new Date(o.placed)).format('YY-MM-DD'));
    
    const formattedOrders  = chartOrders.reduce((r, e) => {
      r.push([moment(e.placed).format('DD MMM YY'), e.total]);
      return r;
    }, []);
    const p = [];
    const chartData = formattedOrders.reduce((r, e) => {
      const key = e[0];
      if(!p[key]){
        p[key] = e;
       r.push(p[key]);
      } else {
        p[key][1] += e[1];
      }
      return r;
    }, []);
    return chartData;
  }


}
