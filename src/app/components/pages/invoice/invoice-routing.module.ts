import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { Invoice1Component } from './invoice1/invoice1.component';


const routes : Routes = [
    {
        path:'',
        children: [
            { path: 'invoice-list', component: InvoiceListComponent},
            { path: 'invoice-1', component: Invoice1Component},
            { path: 'invoice-add', component: AddInvoiceComponent},
            { path: 'invoice-edit', component: EditInvoiceComponent},
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class InvoiceRoutingModule { }