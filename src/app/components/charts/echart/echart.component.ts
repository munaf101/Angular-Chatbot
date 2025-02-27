/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component,  OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
// import * as echartData from '../../../files/echarts';
import * as chartdata from 'src/app/shared/data/charts/echart';

@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.scss']
})
export class EchartComponent implements OnInit {
currentRoute: any;
  urlData: any;
  constructor(private router:Router) { 
    
    router.events.pipe(filter((event:any)=> event instanceof NavigationEnd)).subscribe( (event:any) => {
      this.currentRoute = event.url;
      this.urlData = event.url.split("/");
    });
  }
  ngOnInit(): void {

  }
  public echartLineOption = chartdata.echartLineOption;
  public echartLineBarOption = chartdata.echartLineBarOption;
  public echartHorizontalLineChart = chartdata.echartHorizontalLineChart;
  public echartHorizontalLineBarChart = chartdata.echartHorizontalLineBarChart;
  public echartStackedBarChart = chartdata.echartStackedBarChart;
  public echartHoriStackedBarChart = chartdata.echartHoriStackedBarChart;
}
