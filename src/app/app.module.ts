import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {AgGridModule} from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionSalesComponent } from './sections/section-Dashboard/section-sales.component';
import { SectionBoqComponent } from './sections/section-Boq/section-boq.component';
import { SectionProjectComponent } from './sections/section-project/section-project.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ServerComponent } from './server/server/server.component';
import { ButtonRendererComponent } from './common/renderer/button-renderer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { BoqEditComponent } from './sections/section-Boq/boq-edit/boq-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionSalesComponent,
    SectionBoqComponent,
    SectionProjectComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    ServerComponent,
    BoqEditComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ChartsModule,
    HttpClientModule,
    MaterialModule,
    AgGridModule.withComponents([ButtonRendererComponent]),
    BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
