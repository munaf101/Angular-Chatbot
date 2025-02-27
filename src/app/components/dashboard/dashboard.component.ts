import { Component, OnInit, AfterViewInit } from '@angular/core';
// import PerfectScrollbar from 'perfect-scrollbar';
import { recentActivitiesData, recentCustomersData } from '../../shared/data/dashboard/dashboard';
import * as chartData from '../../shared/data/charts/dashboard';
import { ApiauthService } from 'src/app/Service/apiauth.service';
import * as echarts from 'echarts';
import * as chartData1 from '../../shared/data/charts/chartwidgets';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {


    public ApexSparkliness: any[] = [];

  userData: any;
  TransferData: any;
  operatorData: any;
  filteredData: any;
  echartLineBarOption1: any;
  userData1: any;
  recentActivities = recentActivitiesData;
  recentCustomers = recentCustomersData;

  constructor(private authService: ApiauthService) { }


  ngOnInit(): void {
    this.authService.getDashboardData().subscribe(data => {
      console.log(data);
      this.userData = data;

      





      
      this.echartLineBarOption1 = {
          grid: {
              top: '6',
              right: '0',
              bottom: '17',
              left: '25'
          },
          tooltip: {
              show: true,
              showContent: true,
              alwaysShowContent: true,
              triggerOn: 'mousemove',
              trigger: 'axis',
              axisPointer: {
                  label: {
                      show: false,
                  }
              }
          },
          xAxis: {
              // data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              data: data.monthly_data.months,
              axisLine: {
                  lineStyle: {
                      color: 'rgba(67, 87, 133, .09)'
                  }
              },
              axisLabel: {
                  fontSize: 10,
                  color: '#8e9cad'
              },
      
          },
          yAxis: {
              splitLine: {
                  lineStyle: {
                      color: 'rgba(67, 87, 133, .09)'
                  }
              },
              axisLine: {
                  lineStyle: {
                      color: 'rgba(67, 87, 133, .09)'
                  }
              },
              axisLabel: {
                  fontSize: 10,
                  color: '#8e9cad'
              }
          },
          series: [
              // {
              //     name: 'Total Chat weeks',
              //     type: 'line',
              //     smooth: true,
              //     // data: [28, 5, 15, 10, 10, 8, 9, 12, 5, 15, 10, 10, 8, 16], 
              //     data: data.weekly_data.chat_counts,
              //     // itemStyle: {
              //     //     barBorderRadius: [50, 50, 0, 0],
              //     //     color: ''
              //     // }
              //     itemStyle: {
              //         normal: {
              //             barBorderRadius: [50, 50, 0, 0],
              //             color: new echarts.graphic.LinearGradient(
              //                 0, 0, 0, 1,
              //                 [
              //                     { offset: 0, color: '#fd6f82' },
              //                     { offset: 1, color: '#fb1c52' }
              //                 ]
              //             )
              //         }
              //     },
              // },
              {
                  name: 'Total Chats',
                  symbolSize: 20,
                  barWidth: 20,
                  type: 'bar',
                  // data: [13, 17, 19, 22, 17, 11, 19, 20, 17, 19, 25, 17, 11, 19],
                  data: data.monthly_data.chat_counts,
                  itemStyle: {
                      normal: {
                          barBorderRadius: [50, 50, 0, 0],
                          color: new echarts.graphic.LinearGradient(
                              0, 0, 0, 1,
                              [
                                  { offset: 0, color: '#705ec8' },
                                  { offset: 1, color: '#20c2fa' }
      
                              ]
                          )
                      }
                  },
              }
          ],
          color: ['#ef6430', '#2205bf']
      }
      
      


      this.filteredData = this.userData.load_req.map((item: any) => ({
        name: item.name,
        phone: item.phone_no,
        u_id: item.u_id,
        uname: item.uname
    }));

    this.TransferData = this.userData.transfer_data.map((item: any) => ({
        name: item.name,
        phone: item.phone_no,
        uname: item.uname,
        ta_id: item.ta_id
    }));

    this.operatorData = this.userData.users.map((item: any) => ({
        name: item.name,
        lname: item.lname,
        id: item.id,
        total_requests_today: item.total_requests_today
    }));
    
    
    this.ApexSparkliness = [
        chartData1.ApexSparklines1,
        chartData1.ApexSparklines2,
        chartData1.ApexSparklines3,
        chartData1.ApexSparklines4
      ];

    });
    // this.authService.getDashboardData().subscribe(data1 => {
    //   console.log(data1);
    //   this.userData1 = data1;
    // });
  }
  // ngOnInit(): void {
    

  // }
  ngAfterViewInit() {

  }

  public ApexData1:Partial<any> | any = chartData.ApexData1;
  public ApexData2:Partial<any> | any = chartData.ApexData2;
  public ApexData3:Partial<any> | any = chartData.ApexData3;
  public ApexData4:Partial<any> | any = chartData.ApexData4;
  public echartLineBarOption:Partial<any> = chartData.echartLineBarOption;




  
//   public ApexData1 = chartData1.ApexData1;
//   public ApexData2 = chartData1.ApexData2;
//   public ApexData3 = chartData1.ApexData3;

  // //Sparklines Chart
  public ApexSparklines1  = chartData1.ApexSparklines1;
  public ApexSparklines2  = chartData1.ApexSparklines2;
  public ApexSparklines3  = chartData1.ApexSparklines3;
  public ApexSparklines4  = chartData1.ApexSparklines4;

  // //CryptoChart

  public lineChartOptions = chartData1.lineChartOptions;
  public lineChartLabels = chartData1.lineChartLabels;
  public lineChartType = chartData1.lineChartType;
  public lineChartLegend = chartData1.lineChartLegend;
  public lineChartColors = chartData1.lineChartColors;
  public lineChartData = chartData1.lineChartData;
  public lineChartData1 = chartData1.lineChartData1;
  public lineChartData2 = chartData1.lineChartData2;
  public lineChartData3 = chartData1.lineChartData3;

}
