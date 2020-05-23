import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import _ from 'lodash';

import { THEME_COLORS } from '../../shared/themes/theme.colors'

const theme = 'Bright';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  pieChartData: number[];
  pieChartLabels: string[];
  colors: any[] = [
    {
      backgroundColor: this.themeColors(theme),
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
    const allData = res.slice(0, limit);
    this.pieChartData = allData.map(x => _.values(x)[1]);
    this.pieChartLabels = allData.map(x => _.values(x)[0]);

  }

  themeColors(setName: string): string[] {
    const c = THEME_COLORS.slice(0).find(set => set.name === setName).colorSet;
    return c;
  }
}
