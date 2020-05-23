import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import * as moment from 'moment';
import _ from 'lodash';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';
import { OrderService } from 'src/app/shared/order/order.service';
import { OrderData } from 'src/app/shared/order/order.model';

// const LINE_CHART_SAMPLE_DATA: any[] = [
//   { data: [32, 22, 13, 44, 83, 74], label: 'Sentiment Analysis' },
//   { data: [12, 18, 26, 13, 24, 39], label: 'Image recognition' },
//   { data: [52, 42, 87, 29, 19, 67], label: 'Forecasting' },
// ];

// const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {

  topCustomers: string[];
  allOrders: any[];
  receivedOrderData: OrderData;


  lineChartData: any;
  lineChartLabels: any;
  lineChartOptions: any = {
    responsive: true,
  };
  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  lineChartColors: any[] = LINE_CHART_COLORS;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders():void {
    this.orderService.getOrders().subscribe((res: OrderData) => {
      const groupedCustomerWithOrderArray = this.getChartCustomerData(res);
      const chartLabelArray = this.getChartOrderLabel(res); 
      console.log(chartLabelArray.slice(0,3))
      const chartLblData = chartLabelArray.map(x => x.placed)
      const converedDate = chartLblData[0].map(x => moment(new Date(x)).format('MMM YY'))
      console.log(converedDate);
      
      this.lineChartData = chartLabelArray.slice(0, 1);
      this.lineChartLabels = converedDate;

    },(err) => {console.log(err)}); 
  }

  getChartCustomerData(res: OrderData){
    this.receivedOrderData = res;
    const orderData = this.receivedOrderData.data;
    const groups = {};
    for (let i = 0; i < orderData.length; i++){
      let groupName = orderData[i].name;
      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push(orderData[i].total);
    }
    const chartCustomerArray = [];
    for (var groupName in groups) {
      chartCustomerArray.push({label: groupName, data: groups[groupName]});
    }
    const sortedArr = chartCustomerArray.sort(this.sortHighestValueCustomers);
    return sortedArr.reverse();
  }

  getChartOrderLabel(res: OrderData){
    this.receivedOrderData = res;
    const orderData = this.receivedOrderData.data

    const groupeddata = orderData.map((item)=>  item.name ).filter((item, i, ar) => ar.indexOf(item) === i).map(item=>{
      let new_total = orderData.filter(itm => itm.name == item).map(itm=>itm.total);
      let new_date = orderData.filter(itm => itm.name == item).map(itm=>itm.placed);
      return {label:item, data:new_total, placed: new_date}
    });

    const sortedAndGroupedDataWithDate = groupeddata.sort(this.sortHighestValueCustomers);
    return sortedAndGroupedDataWithDate.reverse();
  }

  sortHighestValueCustomers(a, b){
    let aArr = a.data.reduce((r, e) => r + e, 0)
      let bArr = b.data.reduce((r, e) => r + e, 0)
      if (aArr < bArr) return -1;
      if (aArr > bArr) return 1;
      console.log(aArr, bArr)
      return 0;
  }

}
