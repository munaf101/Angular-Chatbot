import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultTableComponent } from './default-table/default-table.component';
import { TablesRoutingModule } from './tables-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/shared/shared.module';
import { BasicDataTableComponent } from './data-table/basic-data-table/basic-data-table.component';
import { FilterSortPaginationComponent } from './data-table/filter-sort-pagination/filter-sort-pagination.component';
import { ExpandableRowsComponent } from './data-table/expandable-rows/expandable-rows.component';
import { RetiveingHttpComponent } from './data-table/retiveing-http/retiveing-http.component';
import { TableSelectComponent } from './data-table/table-select/table-select.component';
import { DatatableComponent } from './data-table/data-table.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { AgentTableComponent } from './data-table/agent-table/agent-table.component';
import { BotTableComponent } from './data-table/bot-table/bot-table.component';

@NgModule({
  declarations: [ DatatableComponent,BasicDataTableComponent,
    ExpandableRowsComponent,
    FilterSortPaginationComponent,
    RetiveingHttpComponent,
    TableSelectComponent,DefaultTableComponent, AgentTableComponent, BotTableComponent],
  imports: [
    CommonModule,
    TablesRoutingModule,
    NgxDatatableModule,
    NgSelectModule,
    SharedModule,
    MaterialModuleModule,
    DataTablesModule,
    HttpClientModule,

  ]
})
export class TablesModule { }
