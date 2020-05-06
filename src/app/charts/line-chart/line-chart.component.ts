import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [32, 22, 13, 44, 83, 74], label: 'Sentiment Analysis' },
  { data: [12, 18, 26, 13, 24, 39], label: 'Image recognition' },
  { data: [52, 42, 87, 29, 19, 67], label: 'Forecasting' },
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true,
  };
  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  lineChartColors: any[] = LINE_CHART_COLORS;

  constructor() {}

  ngOnInit(): void {}
}
