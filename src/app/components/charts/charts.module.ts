import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApexComponent } from './apex/apex.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { EchartComponent } from './echart/echart.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ApexComponent,
      ChartjsComponent, EchartComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgApexchartsModule,
    ChartistModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    SharedModule
  ]
})
export class ChartModule { }
