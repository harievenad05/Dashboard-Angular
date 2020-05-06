import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

const SAMPLE_DATA: any[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Q3 Sales' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Q4 Sales' },
];

const SAMPLE_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  public barChartOptions: any = {
    responsive: true,
    scaleShowVerticalLines: true,
  };
  public barChartLabels: string[] = SAMPLE_LABELS;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  public barChartData: any[] = SAMPLE_DATA;
  constructor() {}

  ngOnInit(): void {}
}
