import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  pieChartData: number[] = [350, 450, 120];
  pieChartLabels: string[] = [
    'ABC Logistics',
    'Delicious Bakery',
    'XYZ Holdings',
  ];
  colors: any[] = [
    {
      backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
      borderColor: '#111',
    },
  ];
  pieChartType: ChartType = 'doughnut';
  @Input() inputData: any;
  @Input() limit: number;

  constructor() {}

  ngOnInit(): void {
    this.parseChartData(this.inputData, this.limit);
  }

  parseChartData(res: any, limit?: number){
    console.log(res);
  }
}
