import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule  } from 'ng2-charts';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ WidgetsComponent],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    NgCircleProgressModule.forRoot(),
    NgApexchartsModule,
    NgChartsModule ,
    SharedModule
  ]
})
export class WidgetsModule { }
