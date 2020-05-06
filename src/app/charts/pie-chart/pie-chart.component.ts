import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}
