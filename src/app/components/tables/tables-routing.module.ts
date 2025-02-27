import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultTableComponent } from './default-table/default-table.component';
import { DatatableComponent } from './data-table/data-table.component';
import { ExpandableRowsComponent } from './data-table/expandable-rows/expandable-rows.component';


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
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule { }