import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultTableComponent } from './default-table/default-table.component';
import { DatatableComponent } from './data-table/data-table.component';
import { ExpandableRowsComponent } from './data-table/expandable-rows/expandable-rows.component';
import { BasicDataTableComponent } from './data-table/basic-data-table/basic-data-table.component';
import { TableSelectComponent } from './data-table/table-select/table-select.component';


const routes : Routes = [
    {
        path:'',
        children:[
            {
                path:'default',
                component: DefaultTableComponent
            },
            {
                path:'',
                component: DatatableComponent
            },
            {
                path:'search',
                component: ExpandableRowsComponent
            },
            {
                path:'report',
                component: BasicDataTableComponent
            },
            {
                path:'report/bot_messages',
                component: TableSelectComponent
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule { }