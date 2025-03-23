import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultTableComponent } from './default-table/default-table.component';
import { DatatableComponent } from './data-table/data-table.component';
import { ExpandableRowsComponent } from './data-table/expandable-rows/expandable-rows.component';
import { BasicDataTableComponent } from './data-table/basic-data-table/basic-data-table.component';
import { TableSelectComponent } from './data-table/table-select/table-select.component';
import { EditInvoiceComponent } from '../pages/invoice/edit-invoice/edit-invoice.component';
import { AgentTableComponent } from './data-table/agent-table/agent-table.component';


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
                path:'report/bot_messages/:sender',
                component: AgentTableComponent
            },
            // { path: 'user/:id', component: EditInvoiceComponent },
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes),
        // RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class TablesRoutingModule { }